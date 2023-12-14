"use client"
import React, { useEffect, useState } from 'react'
import './popup.scss';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';

const Popup = () => {
  const [version, setVersion] = useState(useSearchParams().get('v'));
  const updateList = [];

  const closeModal = (e, allowedToClick = false) => {
    const insideModal = e.target.closest('.popup-body');
    if (!insideModal || allowedToClick) {
      window.history.replaceState(null, '', '/')
      setVersion(null);
    }
  }

  const updateObject = {
    test: {
      updates: ["test"],
      next: "a"
    },
    a: {
      updates: ["Learned typescript"],
      next: null
    }
  }

  const getUpdates = (v, current) => {
    if (v in updateObject) {
      (updateObject[v].updates && !current) && updateObject[v].updates.forEach((item) => {
        updateList.unshift(item)
      })
      updateObject[v].next && getUpdates(updateObject[v].next, false)
    }
  }

  getUpdates(version, true)

  return (
    <>
      {version && updateList.length &&
        <div id="PopUpGeneral" class="popup-module popup-wrap warning show" onClick={closeModal}>
          <div class="popup-body bounceInDown" aria-modal="true" role="alertdialog" aria-labelledby="dialog_label"
            aria-describedby="dialog_desc">
            <Image onClick={(e) => { closeModal(e, true) }} alt="close popup" className="close-popup" width={32} height={32} src={'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="25" height="25" viewBox="0 0 24 24"%3E%3Cpath fill="%23444" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"%2F%3E%3C%2Fsvg%3E'} />
            <div class="popup-icon"></div>
            <div id="dialog_label" class="title">New resume available</div>
            <div id="dialog_desc" class="text">
              Since you received my resume, I have extended my knowledge.
            </div>
            <span className="update-title">New skills that I acquired</span>
            <ul>
              {updateList.map((updateItem, idx) => {
                return (
                  <li key={idx} className="update-item">
                    {updateItem}
                  </li>
                )
              })}
            </ul>
            <div class="btn-wrap noselect">
              <a href="/assets/pdf/resume_en.pdf" download="Resume István Pataki"><button id="BtnOK" class="btn btn-ok">Download updated resume</button></a>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Popup