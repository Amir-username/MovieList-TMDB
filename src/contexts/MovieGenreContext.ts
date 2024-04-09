import { createContext } from "react";
import { Genre } from "../models/Genre";

export const MovieGenreContext = createContext<Genre[]>([])
