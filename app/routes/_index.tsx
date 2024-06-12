import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { MetaFunction } from "@remix-run/node";
import { Link as RemixLink } from "@remix-run/react";

// https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = () => [
  { title: "Remix Starter" },
  { name: "description", content: "Welcome to remix!" },
];

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Random sandboxes to retain snippets and examples
      </Typography>
      <Link to="/about" color="secondary" component={RemixLink}>
        Go to the about page
      </Link>
      <Link to="/scroll-sense" color="secondary" component={RemixLink}>
        Go to scroll sensor
      </Link>
    </Stack>
  );
}
