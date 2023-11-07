import { configure } from 'mobx';
import RootStore from '../Stores';
import { setWebsocket } from '@deriv/shared';
import ServerTime from '_common/base/server_time';
import { TCoreStores } from '@deriv/stores/types';

configure({ enforceActions: 'observed' });

let root_store: TCoreStores;

const initStore = (core_store: TCoreStores, websocket: Record<string, unknown>) => {
    if (root_store) return root_store;

    ServerTime.init(core_store.common);
    setWebsocket(websocket);
    root_store = new RootStore(core_store) as unknown as TCoreStores;

    return root_store;
};

export default initStore;
