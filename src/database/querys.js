export const querys ={

    Locales_not_sync:"select sCod_Local as 'Codigo_de_local',horas from ( select  sCod_Local,DATEDIFF(hour,dFecha_Actividad,GETDATE()) horas   from Transfer_UDL  where   DATEDIFF(hour,dFecha_Actividad,GETDATE())>6 and DATEDIFF(hour,dFecha_Actividad,GETDATE())<100 and sCod_Local not in ('')) tabla"
}