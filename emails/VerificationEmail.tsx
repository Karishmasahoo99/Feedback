import { Html, Head, Font, Preview,
    Heading, Row, Section, Text, Button} 
from "@react-email/components";

interface VerificationEmailProps{
    username: string;
    otp:string;
}

export default function VerificationEmail({username,otp}
:VerificationEmailProps){
    return(
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification code</title>
                <Font
                fontFamily="Roboto"
                fallbackFontFamily="Verdana"
                webFont={{
                    url:'https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Roboto:ital',
                    format:'woff2',
                }}
                fontStyle="normal"
                fontWeight={400}
                ></Font>
            </Head>
            <Preview>
                Here&apos;s your verification code: {otp}
            </Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {username}</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering. Please use the verification code 
                        to complete your registration:
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>
                        If you did not request this code, Please
                        ignore this email.
                    </Text>
                </Row>
                <Row>
                    <Button style={{color:'#61dafb'}}
                    href={'http://localhost:3000/verify/${username}'}>
                        Verify here
                    </Button>
                </Row>
            </Section>
            
        </Html>
    );
}