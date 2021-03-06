import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dailyStatsSchema = new Schema({
    date: { type: Date, required: true },
    eat: { type: Boolean },
    urinate: { type: Boolean },
    poo: { type: Boolean },
    notes: { type: String }
})

export default mongoose.model('dailyStats', dailyStatsSchema);