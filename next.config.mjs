import MillionLint from "@million/lint";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {};

export default MillionLint.next({ rsc: true })(withNextIntl(nextConfig));
