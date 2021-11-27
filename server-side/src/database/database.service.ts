import { connect } from "mongoose";
import { databaseConfig } from "../config/database.config";
import { roleModel } from "../role/role.model";
import { logger } from "../utils/logger";

const connectDB = async () => {
  try {
    await connect(databaseConfig.getMongoURI(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    logger.info("Successfully connect to MongoDB.");
    initiate();
  } catch (error) {
    logger.error(`Connection error > error ${error}`);
    process.exit();
  };
};

async function initiate() {
  const estimatedDocumentCount = await roleModel.estimatedDocumentCount();
  if (estimatedDocumentCount === 0) {
    const userRole = (await roleModel.create({ name: "user", })).save();
    logger.info(`added 'user' to roles collection. userRole: ${JSON.stringify(userRole)}`);

    const moderatorRole = (await roleModel.create({ name: "moderator", })).save();
    logger.info(`added 'moderator' to roles collection. moderatorRole: ${JSON.stringify(moderatorRole)}`);

    const adminRole = (await roleModel.create({ name: "admin", })).save();
    logger.info("added 'admin' to roles collection");
  }
}

export const databaseService = {
  connectDB,
};