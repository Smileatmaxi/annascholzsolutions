import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
    output: "standalone"
};

export default withNextVideo(withFlowbiteReact(nextConfig));