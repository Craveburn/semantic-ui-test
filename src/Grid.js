import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleStretched = () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>A band of brothers. 3 by blood and 1 by choice. Their individual and collective taste in music creates a sound that will make your ear holes wish they had taste buds. They have many artists to give credit to for their musical inspiration such as Mac Demarco, Tame Impala, and Peach Pit.  Michael Marinos, the oldest of the 4 brothers, is the lead guitarist and vocalist in this psychedelic, new age, indie rock band. Before the formation of Dad Bod, Michael was a solo musician, writing his own songs and performing them around Utah. His writing style, experience and passion for music inspired the formation of Dad Bod. Marcus Marinos (aka Father Time), is the second oldest brother and the drummer of the band. He uses his bottled in rage to show the drums who their real daddy is. Marcus’ love of the oldies, rock and roll, and kurt vile, leaks through in his songwriting and his musical execution. The necessity of a drummer in the band required Marcus to step up to the task and learn the skill in a very short amount of time with no prior experience.The amount of progression that Marcus has shown on the drums proves that he is nothing less than a prodigy. Matthew Marinos (aka skinny fingers) is the bass player. Matthew has played the guitar for years and put his skills to use as a bassist in Dad Bod. Matthew had no experience playing the bass before Dad Bod so when the band asked him to play the bass, his exact words were “Yeah..sure”. His skinny fingers now float across the strings like an apple in one of those apple bobbing stations at the carnival. You know? Like one of those things a bunch of people put their faces into and and try to get as many apples as possible? One of those things. The last brother, but definitely not the least, is Luc Orton. Luc’s Beethoven esc piano skills add a nice touch to the bands elegant sound. Luc’s skills and musical knowledge serve the band greatly since the other brothers don’t really know shit about music. This bands new and unique sound is taking Western America by storm, and they don’t plan on stopping anytime soon.</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleStretched