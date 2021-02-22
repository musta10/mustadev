import React from 'react'
import Nav from '../component/Nav'
import '../assets/styles/events.scss'
import {useSelector} from 'react-redux'
import { MdModeComment } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import Moment from "react-moment";

const Events = () => {

    const events = useSelector(state => state.eventsReducer.events )
    console.log(events)
//// ICI LA LISTE EVENTS .MAP



return(
    <>
    <Nav />
    <p style={{marginTop: 20, textAlign:'center'}}>Événements a Paris, Ille De France</p>
    <div>
    {events.map((elem, index) => {
          return (
            <article key={index} className="card_evenement">
              <div className="date">
                <Moment style={{ color: "#d63031" }} format="DD/MM/YYYY">
                  {elem.date}
                </Moment>

                <p>{elem.description}</p>
              </div>
              <div className="edit-icons">
             <MdEvent
              className="separ"
              color="#000000"
              size={30} />
                <MdModeComment
                  className="separ"
                  color="#000000"
                  size={30}
                />
                <p>commenter</p>
              </div>
            </article>
          );
        })}
    </div>
    </>
)
}

export default Events;