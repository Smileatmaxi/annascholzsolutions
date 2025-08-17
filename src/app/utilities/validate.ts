export const validate = ({
                             email,
                             firstName,
                             lastName,
                             subject,
                             message
                         }: {
    email: string
    firstName: string
    lastName: string
    subject: string
    message: string
}) => {
    const validationErrors: {email?: string; firstName?: string; lastName?: string;  subject?: string; message?: string;} = {}

    // Validation
    if (firstName.length <= 2) validationErrors.firstName = 'First name is required!';
    if (lastName.length <= 2) validationErrors.lastName = 'Last name is required!';
    if (
        email.length <= 1 ||
        !email.includes('@') ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
        validationErrors.email = 'A Valid E-Mail is required!';
    }
    if (company.length <= 0) validationErrors.company = 'Company is required!';
    if (subject.length <= 0) validationErrors.subject = 'Subject is required!';
    if (message.length <= 0) validationErrors.message = 'Message is required!';

    return validationErrors;

}