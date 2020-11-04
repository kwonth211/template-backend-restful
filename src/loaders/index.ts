import expressLoader from "./expressApp";
import dependencyInjectorLoader from "./dependencyInjector";
import mongooseLoader from "./mongooseLoader";
// import dependencyInjectorLoader from "./dependencyInjector";
// import mongooseLoader from "./mongoose";
// import jobsLoader from "./jobs";
// import Logger from "./logger";
//We have to import at least all the events once so they can be triggered
// import './events';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  //   Logger.info("✌️ DB loaded and connected!");

  //   const userModel = {
  //     name: 'userModel',
  //     // Notice the require syntax and the '.default'
  //     model: require('../models/user').default,
  //   };

  //   // It returns the agenda instance because it's needed in the subsequent loaders
  await dependencyInjectorLoader({ mongoConnection });
  //     mongoConnection,
  //     models: [
  //       userModel,
  //       // salaryModel,
  //       // whateverModel
  //     ],
  //   });
  //   Logger.info('✌️ Dependency Injector loaded');

  //   await jobsLoader({ agenda });
  //   Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  //   Logger.info("✌️ Express loaded");
};
