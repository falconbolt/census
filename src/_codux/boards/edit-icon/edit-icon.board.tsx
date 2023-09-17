import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { EditIcon } from '../../../../components/icons/table/edit-icon';

export default createBoard({
    name: 'EditIcon',
    Board: () => <EditIcon />
});
