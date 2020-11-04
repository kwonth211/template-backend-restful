import mongoose from "mongoose";

const mongooseLoader = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://${"kwonth211"}:${"shdrn2233!"}@cluster0-umti3.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return connection.connection.db;
};
export default mongooseLoader;
