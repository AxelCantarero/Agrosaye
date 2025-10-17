import express from 'express'
import dotenv from 'dotenv'

import fincaRoutes from "./routes/finca.routes.js";
import cultivoRoutes from "./routes/cultivo.routes.js";
import unidadMedidaRoutes from "./routes/unidadMedida.routes.js";
import ingresoRoutes from "./routes/ingreso.routes.js";
import egresoRoutes from "./routes/egreso.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import actividadRoutes from "./routes/actividad.routes.js";
import aplicacionRoutes from "./routes/aplicacion.routes.js";
import recordatorioRoutes from "./routes/recordatorio.routes.js";
import inventarioCultivoRoutes from "./routes/inventarioCultivo.routes.js";
import inventarioProductoRoutes from "./routes/inventarioProducto.routes.js";
import estadoRoutes from "./routes/estado.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors"
dotenv.config();

const app = express()
//
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json())
app.use("/api/fincas", fincaRoutes);
app.use("/api/cultivos", cultivoRoutes);
app.use("/api/unidades", unidadMedidaRoutes);
app.use("/api/ingresos", ingresoRoutes);
app.use("/api/egresos", egresoRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/actividades", actividadRoutes);
app.use("/api/aplicaciones", aplicacionRoutes);
app.use("/api/recordatorios", recordatorioRoutes);
app.use("/api/inventarios-cultivo", inventarioCultivoRoutes);
app.use("/api/inventarios-producto", inventarioProductoRoutes);
app.use("/api/estados", estadoRoutes);
app.use("/api/auth", authRoutes);

export default app;
