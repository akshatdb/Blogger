class FeedbackMailerPreview < ActionMailer::Preview
  def sample_mail_preview
    FeedbackMailer.sample_email(User.first)
  end
end