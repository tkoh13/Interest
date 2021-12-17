class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token 

    has_one_attached :photo

    has_many :pins

    has_many :boards

    has_many :boardtopins, :through => :boards, :source => :board_to_pin

    has_many :following,
        class_name: :Follow,
        foreign_key: :follower_id

    has_many :followers,
        class_name: :Follow,
        foreign_key: :followee_id

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password);
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        token = SecureRandom.urlsafe_base64
        token = SecureRandom.urlsafe_base64 while User.exists?(session_token: token)
        token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save
        self.session_token
    end
end
