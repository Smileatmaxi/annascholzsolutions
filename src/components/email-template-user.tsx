import {Body, Container, Head, Heading, Hr, Html, Img, Preview, Section, Text,} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    ticketNumber: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://annascholz.de';

export const EmailTemplateUser: React.FC<Readonly<EmailTemplateProps>> = ({firstName, ticketNumber}) => (
    <Html>
        <Head/>
        <Body style={main}>
            <Preview>Anna Scholz Request Received</Preview>
            <Container style={container}>
                <Section style={coverSection}>
                    <Section style={imageSection}>
                        <Img src={`${baseUrl}/ui/IlluminatedInteractive-email-header.png`}
                             alt="AnnaScholz Logo"
                             width="600"
                             height="200"
                        />
                    </Section>
                    <Section style={upperSection}>
                        <Heading style={h1}>Thanks for Reaching Out!</Heading>
                        <Text style={mainText}>
                            Hey {firstName},<br/>
                            Thank you for contacting me! I truly appreciate you taking the time to reach
                            out. I&apos;m busy working to get you what you want!
                            <br/>
                        </Text>
                        <h3>Your Ticket Number: {ticketNumber}</h3>
                        <Text style={mainText}>
                            Just a little note: if you happen to send me multiple requests, it might push your
                            ticket back in line. So, please try to keep it to one message at a time.
                            <br/>
                            Your patience means the world to me.
                            <br/>
                            <br/>
                            Thanks,<br/>
                            Anna Scholz
                        </Text>
                    </Section>
                    <Hr/>
                    <Section style={lowerSection}>
                        <Text style={cautionText}>
                            This is an automated message. Please do not respond to this email. I will get in touch
                            with you!
                        </Text>
                    </Section>
                </Section>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: '#fff',
    color: '#212121',
};

const container = {
    padding: '20px',
    margin: '0 auto',
    backgroundColor: '#eee',
};

const h1 = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
};

const text = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
};

const imageSection = {
    backgroundColor: 'transparent',
    display: 'flex',
    padding: '20px 0',
    alignItems: 'center',
    justifyContent: 'center',
};

const coverSection = {backgroundColor: '#fff'};

const upperSection = {padding: '25px 35px'};

const lowerSection = {padding: '25px 35px'};

const mainText = {...text, marginBottom: '14px'};

const cautionText = {...text, margin: '0px'};