import { createBoard } from '@wixc3/react-board';
import { Weeklypayments } from '../../../components/weeklypayments/weeklypayments';

export default createBoard({
    name: 'Weeklypayments',
    Board: () => <Weeklypayments />,
    environmentProps: {
        canvasWidth: 266
    }
});
