import * as React from 'react';
import { Item }   from '../../domain/domain';

export interface ItemProps { item: Item }

export const EditableItem = (props: ItemProps) => (
    <div>
        <div>
            <div>
                {props.item.name}
            </div>
        </div>
        <div>
            <button>Edit</button>
            <button>Mark as used</button>
        </div>
    </div>
);