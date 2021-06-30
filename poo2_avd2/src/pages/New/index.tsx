import React, { useEffect, useState } from 'react'
import api from '../../service/api'
import { Container } from './styles'
import { useParams } from 'react-router-dom'

interface CadastrarEvento {
    id: string;
    nomeEvento: string;
    local: string;
    diaSemana: string;
    horario: string;
  }
  
  interface Params {
      id: string;
    }

const New:React.FC=()=>{
    const { id } = useParams<Params>()
    const [nomeevento, setNomeEventos] = useState('')
    const [local, setLocal] = useState('')
    const [diasemana, setdiaSemana] = useState('')
    const [horario, setHorario] = useState('')

    useEffect(() => {
        encontrarEvento(id)
    }, [])

    async function encontrarEvento(id: string) {
      const encontrarEvento = await api.get(`/events/${id}`)
      setNomeEventos(encontrarEvento.data.nomeEvento)
      setLocal(encontrarEvento.data.local)
      setdiaSemana(encontrarEvento.data.diaSemana)
      setHorario(encontrarEvento.data.horario)
    }
    
    async function atualizarEvento(event: any){
      event.preventDefault()
  
      if (!nomeevento.trim() || !local.trim() || !diasemana.trim() || !horario.trim()) {
        return
      }

      const novoEvento = await api.post('/events', {
        nomeevento,
        local,
        diasemana,
        horario,
      })

    }
    return(
      <Container>
        <form onSubmit={atualizarEvento}>
          <input 
            type='text'
            name='nome do evento'
            onChange={event => setNomeEventos(event.target.value)}
            placeholder= 'Nome do Evento: '
          />
          <input 
            type='text'
            name='local'
            onChange={event => setLocal(event.target.value)}
            placeholder='Local do Evento: '
          />
          <input 
            type='text'
            name='dia da semana'
            onChange={event => setdiaSemana(event.target.value)}
            placeholder='Dia da Semana: '
          />
          <input 
            type='text'
            name='horario'
            onChange={event => setHorario(event.target.value)}
            placeholder='Horário: '
          />
        </form>
      </Container>
    )
  }

export default New