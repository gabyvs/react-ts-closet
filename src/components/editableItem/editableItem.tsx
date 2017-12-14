import * as React       from 'react';
import { Item }         from '../../domain/domain';
import { Card, Button } from 'semantic-ui-react'


export interface ItemProps { item: Item }

export const EditableItem = (props: ItemProps) => (
    <Card>
        <Card.Content>
            <Card.Header className="ui centered">
                {props.item.name}
            </Card.Header>
        </Card.Content>
        <div className="ui bottom attached two buttons">
            <Button>Edit</Button>
            <Button
                color='grey'
                content='Wear'
                label={{ as: 'a', basic: true, color: 'grey', pointing: 'left', content: '0' }}>
            </Button>
        </div>
    </Card>
);