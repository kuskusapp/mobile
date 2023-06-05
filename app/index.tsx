import Constants from "expo-constants"
import { Button, Form, H1, Input, Paragraph, YStack } from "tamagui"

import { HankoAuth } from "../components/HankoAuth"
import { MyStack } from "../components/MyStack"

export default function Home() {
  return (
    <MyStack>
      <YStack space="$4" maxWidth={600}>
        <H1 textAlign="center">KusKus</H1>
        <Paragraph textAlign="center">Fast todo app with AI features</Paragraph>
      </YStack>

      <HankoAuth />

      {/* <Button
        onPress={() => {
          // const hankoApi = Constants
          // console.log(hankoApi?.expoConfig?.extra?.hankoApi)
          // router.push("/login")
        }}
      >
        Login
      </Button> */}

      {/* <YStack space="$5">
        <YGroup bordered separator={<Separator />} theme="green">
          <YGroup.Item>
            <Link
              asChild
              href="https://twitter.com/natebirdman"
              target="_blank"
            >
              <ListItem hoverTheme title="Nate" pressTheme icon={Twitter} />
            </Link>
          </YGroup.Item>
          <YGroup.Item>
            <Link
              asChild
              href="https://github.com/tamagui/tamagui"
              target="_blank"
            >
              <ListItem hoverTheme pressTheme title="Tamagui" icon={Github} />
            </Link>
          </YGroup.Item>
          <YGroup.Item>
            <Link
              asChild
              href="https://github.com/ivopr/tamagui-expo"
              target="_blank"
            >
              <ListItem
                hoverTheme
                pressTheme
                title="This Template"
                icon={Github}
              />
            </Link>
          </YGroup.Item>
        </YGroup>
      </YStack> */}
    </MyStack>
  )
}
