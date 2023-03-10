import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
  ButtonList, 
} from "./ui"
import { backgrounds, ButtonVariants } from "./ui.css"

function Product(props) {
  return (
    <Box center paddingY={4} radius="large" responisve background="muted" border={props.variant} width="third">
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="large"
        />
      )}
      <Subhead>{props.heading}</Subhead>
      <Text>{props.text}</Text>
      <Text>{props.productFeature1}</Text>
      <Text>{props.productFeature2}</Text>
      <Text>{props.productFeature3}</Text>
      <Text>{props.productFeature4}</Text>
      <Text>{props.productFeature5}</Text>
      <ButtonList links={props.links} varient={props.variant}/>
    </Box>
  )
}

export default function ProductList(props) {
  return (
    <Section id="pricing">
      <Container >
        <Box center paddingY={4}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <FlexList gap={4} variant="start" responsive>
          {props.content.map((product) => (
              <Product {...product} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
      productFeature1
      productFeature2
      productFeature3
      productFeature4
      productFeature5
      variant
      image {
        alt
        id
        gatsbyImageData
      }
      links {
        id
        href
        text
      }
    }
  }
`