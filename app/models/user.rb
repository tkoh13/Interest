class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token, :email 

    attr_reader :password

    def self.find_by_credentials(user_params)
        user = User.find_by(email: user_params[:email])
        user && user.is_password?(user_params[:password]) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password);
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token ||= SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        @session_token = SecureRandom::urlsafe_base64
    end
end
