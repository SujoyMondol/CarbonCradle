import { Schema, model, Document } from 'mongoose';

export interface IEnergyData extends Document {
  userId: string;
  usage: number;
  timestamp: Date;
}

const EnergyDataSchema = new Schema<IEnergyData>({
  userId: { type: String, required: true },
  usage: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default model<IEnergyData>('EnergyData', EnergyDataSchema);