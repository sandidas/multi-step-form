import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  thumb: { type: String },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
});

const QuestionnaireSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  thumb: { type: String },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
});

const Question = mongoose.model('Question', QuestionSchema);
const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);

module.exports = { Question, Questionnaire };
