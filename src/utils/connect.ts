import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Connected To Db");
  } catch (error) {
    console.error("Could NOt Connect To Db");
    process.exit(1);
  }
}

export default connect;