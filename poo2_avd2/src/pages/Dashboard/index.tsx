import React from 'react'
import { useEffect, useState } from 'react'
import api from '../../service/api'
import { Container } from './styles'

interface TodosEventos {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

const Dashboard: React.FC = () => {

  /*const history = useHistory()*/
  const [eventos, setEventos] = useState<TodosEventos[]>([])
  const [nomeevento, setNomeEventos] = useState('')
  const [local, setLocal] = useState('')
  const [diasemana, setdiaSemana] = useState('')
  const [horario, setHorario] = useState('')
  var[like, setLike] = useState(0)
  var[dislike, setDislike]= useState(0)

  useEffect(()=>{
    pesquisarEvento()
  },[] )

  async function apagarEvento(id:string) {
    await api.delete(`/events/${id}`);
    pesquisarEvento();
  }

  async function pesquisarEvento() {
    const TodosEventos = await api.get('/events')
    setEventos(TodosEventos.data)
  }

  async function adicionarEvento(event: any) {
    event.preventDefault()

    if (!nomeevento.trim() || !local.trim() || !diasemana.trim()) {
      return
    }

    const novoEvento = await api.post('/events', {
      nomeevento,
      local,
      diasemana,
      horario,
    })

    const { data } = novoEvento

    setEventos([...eventos, data])
  }

  const adicionarLike = async (id: string) => {
    await api.post(`/events/like/${id}`);
    api.get('/events').then((res) => setEventos(res.data));
  }

  const adicionarDislike = async (id: string) => {
    await api.post(`/events/dislike/${id}`);
    api.get('/events').then((res) => setEventos(res.data));
  }

  return (
    <Container>
      <form onSubmit={adicionarEvento}>
        <input type='text' name='nomeevento' placeholder='Nome do Evento' onChange={event=>setNomeEventos(event.target.value)} />
        <input type='text' name='local' placeholder='Local do Evento' onChange={event=>setLocal(event.target.value)} />
        <input type='text' name='diasemana' placeholder='Dia da Semana' onChange={event=>setdiaSemana(event.target.value)} />
        <input type='text' name="horario" placeholder="Horário" onChange={event=>setHorario(event.target.value)} />
        <button type="submit">Salvar</button>
        <button type="submit">Total</button>
      </form>
      
      <table>
                <thead>
                    <tr>
                        <th>Evento</th>
                        <th>Local</th>
                        <th>Dia Semana</th>
                        <th>Horário</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {eventos.map((event:TodosEventos) => {
                      return(
                        <tr key={event.id}>
                        <td>{` ${event.nomeevento}`}</td>
                        <td>{` ${event.local}`}</td>
                        <td>{` ${event.diasemana}`}</td>
                        <td>{` ${event.horario}`}</td>
                        <td>{` ${event.like}`}</td>
                        <td>{` ${event.dislike}`}</td>
                        <button onClick={() => {apagarEvento(event.id)}}>Apagar</button>
                        <button type="button" onClick={() => adicionarLike(event.id)}>👍</button>
                        <button type="button" onClick={() => adicionarDislike(event.id)}>👎</button>
                      </tr>  
                      )})}
                </tbody>
      </table>
    </Container>
  )
}

export default Dashboard



