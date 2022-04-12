import {Schema as MongooseSchema} from 'mongoose';

export class CreateHobbyInput {
  name: String;
}

export class ListHobbyInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: String;
}

export class UpdateHobbyInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
}