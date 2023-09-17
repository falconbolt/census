import React from 'react';
import { Container, Card, Row, Col, Text, Link, Box } from "@nextui-org/react";
import Image from 'next/image';import { Flex } from '../styles/flex';

export default function ServiceList({ services }) {
  return (
    <Flex
      css={{
        gap: '$12',
        pt: '$5',
        height: 'fit-content',
        flexWrap: 'wrap',
        '@lg': {
          flexWrap: 'wrap',
        },
        '@sm': {
          pt: '$10',
        },
      }}
      justify={'center'}
    >
      <Flex
        css={{
          px: '$12',
          mt: '$8',
          '@xsMax': { px: '$10' },
          gap: '$12',
        }}
        direction={'column'}
      >
        <Flex
          css={{
            gap: '$18',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '@sm': {
              flexWrap: 'wrap',
            },
          }}
          direction={'row'}
        >
          {services.map((service) => (
            <Card css={{ p: '$6', mw: '400px' }} key={service.id}>
              <Card.Header>
                <Image src={service.imageLink} width={110} height={80} alt={service.title} />
                <Text h4 css={{ lineHeight: '$xs', px: '$2', }}>
                  {service.title}
                </Text>
            </Card.Header>
              <Card.Body css={{ py: '$2' }}>
                <Text>{service.message}</Text>
              </Card.Body>
              <Card.Footer>
                <Link icon color="primary" target="" href={service.link}>
                  View services
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
