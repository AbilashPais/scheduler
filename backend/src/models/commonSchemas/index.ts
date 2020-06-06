import { Schema } from 'mongoose'

export const priceSchema = new Schema({
  amount: { type: Number, default: 0, required: true },
  currency: { type: String, default: 'INR', enum: ['INR', 'USD'] }
})

export const durationSchema = new Schema({
  value: { type: Number, default: 0 },
  unit: {
    type: String,
    enum: ['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century'],
    required: true
  }
})
