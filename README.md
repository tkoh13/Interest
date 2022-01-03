## Overview
Interest is a fullstack clone of Pinterest, a place of visual discovery and inspiration. Built on Ruby on Rails and Postgres on the backend with JavaScript and React on the front end, users can share images as pins and curate boards to group and organize pins. 
[Live Site](https://interest-fsp.herokuapp.com/)

![ss_1](https://github.com/tkoh13/Interest/blob/main/app/assets/images/SS_1.jpg)


## Key Features
### User Authentication / Demo User: 
Using the BCrypt gem, create an account to interact with other users and pins
![ss_2](https://github.com/tkoh13/Interest/blob/main/app/assets/images/SS_2.jpg)

### Pins: 
Create/delete and save pins to boards
![ss_3](https://github.com/tkoh13/Interest/blob/main/app/assets/images/SS_3.jpg)
![ss_4](https://github.com/tkoh13/Interest/blob/main/app/assets/images/SS_4.jpg)
CHALLENGE: 
When creating a pin, the newly created pin needed to be displayed on the ProfilePage even though it was not part of any board yet. As opposed to having an all pin display, a pesudo-board was created to accomadate all user created pins that does not belong to a board as well as consolidating all pins saved to boards. 
```javascript
const BoardIndex = (props) => {
    const { currentUser, user, userId, boards, saves, openModal } = props

    let allPins
    !saves.length ? allPins = null : 
    allPins = {
        title: "All Pins",
        pins: saves.map(pin => Object.values(pin)[0])
    }
    
    const allPinsBoard = allPins ? (
        <BoardPreview board={allPins} pins={allPins.pins} user={user} />
    ) : (
        null
    )

    return (
        <div className='board-index-container'>  
            <div className='board-index-create'>
                {user === currentUser ? <div className='profile-create'><DropDownButton type="profileCreate" actions={{ openModal, currentUser }} /></div> : <div></div>}
            </div>              
            <div className='board-grid'>
                {allPinsBoard}
                {boards.map((board) => (
                    <BoardPreview board={board} pins={board.pins} user={user} key={board.id}/>
                ))}
            </div>
        </div>
    )

}
```

### Boards: 
Create a collection of your favorite pins 
![ss_5](https://github.com/tkoh13/Interest/blob/main/app/assets/images/SS_5.jpg)
CHALLENGE: 
In order to display the preview of the board in the ProfilePage and consolidate the fetching of the data of the board and pins within that board, each pin data was nested in the board view. 
```javascript
@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :creator_id, :title, :description, :private, :created_at
            json.pins board.pins do |pin|
                json.extract! pin, :id, :creator_id, :title, :description, :created_at
                json.photoUrl url_for(pin.photo)
            end
    end
end
```

### Follows: 
Follow/unfollow other users from their profile page or pin details page
![ss_6](https://github.com/tkoh13/Interest/blob/main/app/assets/images/SS_6.jpg)
![ss_7](https://github.com/tkoh13/Interest/blob/main/app/assets/images/SS_7.jpg)
CHALLENGE:
As the user follows or unfollows another user, it was initially fetching follow data from the backend to the Follows Controller. However, the FollowButton needed to update the follow or unfollow render and the ProfilePage needed to update the follow count and the follow modal. 
In order to reduce the number of calls to the backend, I incorporated the user view to include the follow data. This also simiplified how the data was updating on the frontend. 
```javascript
json.extract! @user, :id, :email, :username, :following, :followers
json.photoUrl url_for(@user.photo) if @user.photo.attached? 
json.following @user.following do |user|
        json.extract! user.followee, :id, :email, :username, :following, :followers
        json.photoUrl url_for(user.followee.photo) if user.followee.photo.attached? 
    end
json.followers @user.followers do |user|
        json.extract! user.follower, :id, :email, :username, :following, :followers
        json.photoUrl url_for(user.follower.photo) if user.follower.photo.attached? 
    end

```

```javascript
class FollowButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: null
        }
        this.handleFollow = this.handleFollow.bind(this)
        this.handleUnFollow = this.handleUnFollow.bind(this)
    }

    componentDidMount() {
        const { user, currentUser } = this.props;
        if (currentUser.following.filter(u => u.id === user.id)[0]) {
            this.setState({ status: true })
        }
    }

    handleFollow() {
        const { createFollow, currentUser, user } = this.props;
        const follow = {
            follower_id: currentUser.id,
            followee_id: user.id,
        }
        createFollow(follow)
            .then(() => this.setState({ status: true }));
    }

    handleUnFollow() {
        this.setState({ status: false })
        const { deleteFollow, follows, user, currentUser } = this.props
        const followId = follows.filter(e => e.followee_id === user.id && e.follower_id === currentUser.id)[0]["id"]        
        deleteFollow(followId)
            .then(() => this.setState({ status: false }));
    }

    renderButton() {
        const { user, currentUser } = this.props
        const { status } = this.state
        if (user.id === currentUser.id) return null
        if (status) {
            return (
                <button className="unfollow-button" onClick={() => this.handleUnFollow()}>
                    Unfollow
                </button>
            );
        } else {
            return (
                <button className="follow-button" onClick={() => this.handleFollow()}>
                    Follow
                </button>
            );
        }
    }

    render() {
        return(
            <div>
                {this.renderButton()}
            </div>
        )
    }
}
```

## Technologies
- Javascript
- React / Redux
- Ruby [^1] on Rails [^2]
- PostgreSQL
- HTML / CSS
- AWS

[^1]: ruby version 2.5.1
[^2]: rails version 5.2.3
