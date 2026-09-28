import { JLPTQuestion, JLPTLevel } from '../types';
import { EXAM_N5_PACKAGE } from './jlpt/n5';
import { EXAM_N4_PACKAGE } from './jlpt/n4';
import { EXAM_N3_PACKAGE } from './jlpt/n3';
import { EXAM_N2_PACKAGE } from './jlpt/n2';
import { EXAM_N1_PACKAGE } from './jlpt/n1';

export interface JLPTExamPackage {
  id: string;
  level: JLPTLevel;
  year: string; // e.g. "2018-12", "2016-12", "2017-12", "2019-12"
  title: string;
  totalTimeMinutes: number;
  questions: JLPTQuestion[];
}

export const JLPT_EXAM_PACKAGES: JLPTExamPackage[] = [
  EXAM_N5_PACKAGE,
  EXAM_N4_PACKAGE,
  EXAM_N3_PACKAGE,
  EXAM_N2_PACKAGE,
  EXAM_N1_PACKAGE
];
