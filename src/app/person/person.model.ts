import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema} from 'mongoose';
import { Field, ObjectType} from '@nestjs/graphql';

import { Hobby } from "../hobby/hobby.model";

@ObjectType()
@Schema()
export class Person {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: String;

  @Field(() => [String])
  @Prop({type: [MongooseSchema.Types.ObjectId], ref: Hobby.name})
  hobbies: MongooseSchema.Types.ObjectId[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
