import { useRouter } from "expo-router"
import { Button, H1, Paragraph, YStack } from "tamagui"

import { MyStack } from "../components/MyStack"

export default function Home() {
  const router = useRouter()

  return (
    <MyStack>
      <YStack space="$4" maxWidth={600}>
        <H1 textAlign="center">KusKus</H1>
        <Paragraph textAlign="center">Fast todo app with AI features</Paragraph>
      </YStack>

      {/* <Button onPress={() => router.push("/users/testuser")}>
        Go to user page
      </Button> */}

      <Button
        onPress={() => {
          router.push("/login")
        }}
      >
        Login
      </Button>

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
