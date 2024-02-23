import mongoose, {ConnectOptions} from "mongoose";
import config from "config";

async function db() {
  const dbUri = config.get("dbUri") as string;
  try {
    await mongoose
    // .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
      .connect(dbUri, {} as ConnectOptions )
      .then(() => {
        console.log(`DB connected to ${dbUri}`);
      });
  } catch (e) {
    console.error(`Database connection error occured `, e);
  }
}

export default db;