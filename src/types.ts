export interface MidiNoteEvent {
  position: number;
  gate: number;
  nn: number;
  vel: number;
}

export interface MidiParamEvent {
  position: number;
  value: number;
}

export interface MidiControlEvent {
  position: number;
  value: number;
  cc: number;
}

export interface MidiSequence {
  /** Ticks per quarter note; the unit every position in this file uses. */
  quantize: number;
  notes: MidiNoteEvent[];
  pitches: MidiParamEvent[];
  controls: MidiControlEvent[];
}

export interface DivNote {
  nn: number;
  gate: number;
  vel: number;
  recPos: number;
  referrers: number[];
}
export interface BmhDefinition {
  zz: number;
  div: number;
}
export interface Division {
  name: string;
  quantize: number;
  notes: DivNote[];
  recording: MidiNoteEvent[];
  definitions: BmhDefinition[];
  src2def: number[];
  zzDefinition: boolean;
}
