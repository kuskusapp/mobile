import { useEffect, useState } from "react"
import { Hanko } from "@teamhanko/hanko-frontend-sdk"
import { Button, Form, SizeTokens } from "tamagui"

interface Props {
  size?: SizeTokens
}

async function signInWithGoogle() {
  const hanko = new Hanko("")

  try {
    await hanko.thirdParty.auth("google", "")
  } catch (error) {
    // handle error
  }
}

export function HankoAuth(props: Props) {
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  )

  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [status])

  return (
    <Form
      alignItems="center"
      minWidth={300}
      space
      onSubmit={() => setStatus("submitting")}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
    >
      <Button
        onPress={async () => {
          signInWithGoogle()
        }}
      >
        Sign in with Google
      </Button>

      {/* <Input placeholder="Enter email" />

      <Form.Trigger asChild disabled={status !== "off"}>
        <Button icon={status === "submitting" ? () => <Spinner /> : undefined}>
          Submit
        </Button>
      </Form.Trigger> */}
    </Form>
  )
}
