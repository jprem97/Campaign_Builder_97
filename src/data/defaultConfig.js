const defaultConfig = {
  initialFeedback: {
    title: "We value your feedback!",
    subtitle: "Please take a moment to rate your experience.",
    ratingType: "motionless",
    ratingMedia: [null, null, null, null, null],
  },
  feedbackPage: {
    submitButtonText: "Submit Feedback",
    additionalCommentToggle: true,
    options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"],
  },
  thankYouPage: {
    title: "Thank you for your feedback!",
    subtitle: "Your response has been recorded successfully.",
    buttonText: "Close",
    media: null,
  },
  styling: {
    backgroundColor: "#FFFFFF",
    titleColor: "#1A1A1A",
    subtitleColor: "#555555",
    buttonColor: "#4A90D9",
    buttonTextColor: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "400",
    borderRadius: "8px",
    buttonWidth: "100%",
    buttonHeight: "48px",
    selectedRatingColor: "#4A90D9",
    unselectedRatingColor: "#D1D5DB",
  },
};

export default defaultConfig;
