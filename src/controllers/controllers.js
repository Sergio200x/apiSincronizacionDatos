import {getConettion_empresas} from '../database/conexion_Empresas.js'
import { querys } from '../database/querys.js'

export const controller= {

    Locales_sync:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas()
                            const result=await pool
                             .request()
                             .query(querys.Locales_not_sync)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/synclocales"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    },
    vista_semana_pasada:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_tickets()
                            const result=await pool
                             .request()
                             .query(querys.tick_semana_pasada)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/semana_pasada"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    }



}


/**HOLALALALALAL*/