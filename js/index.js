import React from "react";
import { render } from "react-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  Heading,
  Link,
  Text,
  TextField
} from "gestalt";

const Section = ({ children, title }) => (
  <Box padding={2}>
    <Box marginBottom={1}>
      <Heading size="xs">{title}</Heading>
    </Box>
    {children}
  </Box>
);

const Demo = () => (
  <Box>
    <Section title="Avatar">
      <Box width={40}>
        <Avatar
          src="jpg"
          name=" Epps"
        />
      </Box>
    </Section>

    <Section title="Button">
      <Button text="Button" />
    </Section>

    <Section title="Box">
      <Box display="flex">
        <Box column={4} color="lightGray">
          <Text>1</Text>
        </Box>
        <Box column={4} color="darkGray">
          <Text color="white">2</Text>
        </Box>
        <Box column={4} color="lightGray">
          <Text>3</Text>
        </Box>
      </Box>
    </Section>

    <Section title="Card">
      <Box maxWidth={200} padding={2} column={12}>
        <Card>
          <Link color="darkGray" href="">
            <Avatar
              name="Ben Silbermann"
              src=".jpg"
            />
            <Box paddingX={3} paddingY={2}>
              <Text align="center" bold>
                {"Ben"}
              </Text>
            </Box>
          </Link>
          <Button color="red" text="Follow" />
        </Card>
      </Box>
    </Section>

    <Section title="Text">
      <Text>Text</Text>
    </Section>

    <Section title="TextField">
      <TextField onChange={() => {}} id="textfield" placeholder="Placeholder" />
    </Section>
  </Box>
);

render(<Demo />, document.getElementById("root"));
