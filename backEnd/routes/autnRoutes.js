import express from "express";
import { signUp, login, logout } from "../controllers/authControle.js";
const routes = express.Router();

routes.post("/signUp", signUp);
routes.post("/login", login);
routes.post("/logout", logout);

export default routes;
