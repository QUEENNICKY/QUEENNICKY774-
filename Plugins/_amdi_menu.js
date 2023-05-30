
|  \/  |_   _| | |_(_)     |  _ \  _____   _(_) ___ ___ 
| |\/| | | | | | __| |_____| | | |/ _ \ \ / / |/ __/ _ \
| |  | | |_| | | |_| |_____| |_| |  __/\ V /| | (_|  __/
|_|  |_|\__,_|_|\__|_|     |____/ \___| \_/ |_|\___\___|
* @project_name QUEEN NICKY [WA Multi-device]
* @author BlackAmda <https://github.com/QUEENNICKY/Queen-nicky>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/QUEENNICKY/Queen-nicky>
* @version 4.0.7
* @file  _nicky_menu.js - QUEEN NICKY bot main menu

© 2023 QUEEN NICKY, Dumidu. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { NICKY, nickyDB, _default, _default_list_sections, Language } = require('queen_nicky_core/dist/scripts');
const { getSettings } = nickyDB.settingsDB
const { NICKYVoice } = _default
const { panelList } = _default_list_sections
const Lang = Language.getString('amdiMenu');

/**
 * @cmdInfos { cmd, desc, example, type, react, cmdHideInMenu }
 * @cmdTypes primary, download, logo, profile, admin
*/

NICKY({ cmd: ["panel", "list", "menu"], desc: "QUEEN NICKY Main Menu", type: "primary", react: "📂" }, (async (amdiWA) => {
    let { input, prefix, sendAudioMsg, sendListMsg, msgDevice, sendername } = NICKYWA.msgLayout;
   
    if (input) return;

    const audioURL = NICKYVoice
    const pttStatus = true
    let mimeType = msgDevice == 'ios' ? 'audio/mp4' : 'audio/ogg; codecs=opus'
    await sendAudioMsg({ url: audioURL }, {mimetype: mimeType, ptt: pttStatus});
    const PANEL_HEADER = await getSettings('PANEL_HEADER');
    let text = !PANEL_HEADER.input || PANEL_HEADER.input == 'default' ? `\n*Hello!* ${sendername}` + Lang.panelText : PANEL_HEADER.input.keywords();

    var listInfo = {}
    listInfo.title = Lang.panelTitle
    listInfo.text = text
    listInfo.buttonTXT = 'Select category'

    const sections = panelList(prefix);
    return await sendListMsg(listInfo, sections);
}));
