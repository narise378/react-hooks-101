import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers/index'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('')
    setBody('')
  }

  return (
    <>
      <div className="container-fluid">
        <h4 className="mt-4 mb-3">イベント作成フォーム</h4>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="fromEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea className="form-control" id="fromEventBody" value={body} onChange={e => setBody(e.target.value)}/>
          </div>

          <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
        </form>

        <h4 className="mt-5">イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
