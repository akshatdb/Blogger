class ApplicationMailer < ActionMailer::Base
	default from: "akshatd4@gmail.com"
	def sample_email(user)
    	@user = user
    	mail(to: @user.email, subject: 'Sample Email')
end
