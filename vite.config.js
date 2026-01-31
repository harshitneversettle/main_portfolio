// import { defineConfig } from "vite";

// export default defineConfig({
//   server: {
//     host: "0.0.0.0",
//     port: 5173,
//     allowedHosts: [
//       "ec2-16-171-16-206.eu-north-1.compute.amazonaws.com"
//     ]
//   }
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
