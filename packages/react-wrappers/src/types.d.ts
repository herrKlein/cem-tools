import { CEM } from "../../../tools/cem-utils";
import { BaseOptions } from "../../../tools/configurations";
import type { Attribute } from "custom-elements-manifest";

export interface Options extends BaseOptions {
  /** Used to get a specific path for a given component */
  modulePath?: (className: string, tagName: string) => string;
  /** Used to provide alternative property name to prevent name collisions with React */
  attributeMapping?: { [key: string]: string };
  /** Used to add global element props to all component types */
  globalEvents?: GlobalEvent[];
}

export interface GlobalEvent {
  event: string,
  description: string,
  type: string,
}

export interface Params {
  customElementsManifest: CEM;
}

export interface MappedAttribute extends Attribute {
  originalName?: string;
  propName?: string;
}

export interface ComponentAttributes {
  attributes: MappedAttribute[];
  booleanAttributes: MappedAttribute[];
}

export interface EventName {
  name: string;
  reactName: string;
  description?: string;
  type?: string;
  custom?: boolean;
}
