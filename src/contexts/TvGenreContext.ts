import { createContext } from "react";
import { Genre } from "../models/Genre";

export const TvGenreContext = createContext<Genre[]>([]);