export const data = {
  introduction:
    'There are many ways that people manage their emotions, or “emotion regulation strategies.” This assessment asked about eight strategies that you might use to manage your emotions in various situations. Below, we will show you how many times you said you would use each strategy. We’ll also share (1) pros and cons of each strategy, (2) tips for things you can do to further develop healthy emotion regulation strategies, and (3) reflection questions to help you think deeper about how you manage your emotions.',
  prose: [
    {
      intro: 'There is no one right way to manage your emotions.',
      text:
        'Each strategy has its own strengths and weaknesses, and no one strategy is right for every person or in every situation. Keep in mind that even the most helpful strategies may not be the best strategy for every situation in this assessment. Consider whether your strategy profile matches how you would like to be managing your emotions. Are there any strategies you’d like to use more? We suggest you try out different strategies to see which ones work best for you.',
    },
    {
      intro: 'This report is not comprehensive',
      text:
        "It only covers <span className='italic'>some</span> ways you can manage your emotions in some situations. You may have many other ways you manage your emotions, such as listening to music, taking a walk, or writing in a journal. So, remember to give yourself credit for the unique ways that you manage your emotions, even if you don’t see them reflected in this report.",
    },
  ],
  leading:
    'Below we present the number of times you said you would use each strategy included in this assessment (adding up each time you said you would probably or definitely do something that is an example of that strategy). The assessment included eight examples of each strategy, so your tally for each strategy ranges from 0 to 8. The graph below shows you your tallies for all of the strategies, and below the graph we provide definitions, pros and cons, and tips for each strategy.',
  lists: [
    {
      title: 'Avoidance/Escape',
      description: 'Avoiding or removing yourself from an emotional situation',
      choice: 'AV',
      option: 'avoid or escape',
      pro:
        'Keeps you a safe distance from difficult situations; May help you feel better in the moment; Can prevent unpleasant feelings before they happen.',
      con:
        'Can be counterproductive in many situations (e.g., avoiding schoolwork due to frustration; avoiding having a difficult but important conversation); Prevents you from learning ways to manage your emotions when the situation cannot or should not be avoided.',
      todos: [
        {
          main:
            'Write down some emotional situations that you tend to avoid. For each situation, ask yourself: Is it helping me to avoid this situation, or might I be better off facing it head-on?',
          sub: [],
        },
        {
          main:
            'Try exposing yourself to a situation that makes you slightly uncomfortable. Once you have gained some confidence, move on to a more uncomfortable situation. Notice how you feel and what happens; often the reality isn’t as bad as you imagined it would be.',
          sub: [],
        },
      ],
    },
    {
      title: 'Distraction',
      description:
        'Shifting your attention away from the situation or the emotion',
      choice: 'DI',
      option: 'distract yourself',
      pro:
        'Allows you to disengage from unpleasant situations; Is likely to help you feel better in the moment; A way to temporarily escape from chronic stressors.',
      con:
        'Can be counterproductive when you should be paying attention; Can turn into procrastination or avoidance if used too much.',
      todos: [
        {
          main:
            'Identify positive, brief distractions you can use to help you feel better, for example:',
          sub: [
            'Think of the lyrics of a happy song',
            'Think about a memory that makes you feel happy',
            'Listen or dance to your favorite song',
            'Look at a funny picture/video on your phone',
          ],
        },
      ],
    },
    {
      title: 'Emotional Support Seeking',
      description: 'Reaching out to others for comfort or encouragement',
      choice: 'ES',
      option: 'seek emotional support',
      pro:
        'Allows you to receive comfort, reassurance, and validation; Opportunity to gather others’ perspectives; Helps you process your feelings; Can foster stronger relationships with others.',
      con:
        'You may become dependent on others to manage your emotions if this is your primary emotion regulation strategy; Can accidentally spread unpleasantness to more people; If overused, can hurt relationships with people who may see you as needy.',
      todos: [
        {
          main: 'Identify 3-4 people to whom you can reach out for support',
          sub: [
            'At least one should be a trusted peer whom you can talk to',
            'At least one should be a trusted adult whom you can confide in',
            'Be aware of co-rumination with friends or family where you keep rehashing the same issue and get stuck in a mental rut',
          ],
        },
      ],
    },
    {
      title: 'Experience the Emotion',
      description:
        'Allowing yourself to feel that emotion without trying to change it',
      choice: 'EX',
      option: 'experience the emotion',
      pro:
        'Gives you the opportunity to listen to important information that your emotion is communicating (e.g., feeling anxious is a warning that something bad might happen) and to act on your emotion in appropriate ways (e.g., preparing for the bad thing that might happen); Can help you to get an unpleasant emotion like sadness or anger “out of your system” rather than pushing it away and having it come back later.',
      con:
        'Tends to be unhelpful when emotions are intense or long-lasting (e.g., too much anxiety can paralyze you and keep you from trying new things; letting yourself feel sad for a long time may keep you from doing things you enjoy);  If you usually let yourself experience your emotions without trying to change them, you may feel they are out of your control and are missing opportunities to develop your emotion regulation skills.',
      todos: [
        {
          main: 'Recognize that emotions are normal and fleeting',
          sub: [
            'Remember that your emotions are like ocean waves that become more intense at times, but will surely reach a plateau and eventually subside.',
            'Recite the mantra “this too shall pass” to remind yourself that this emotionally distressing moment will not last forever.',
          ],
        },
        {
          main:
            'Practice meditation with mobile apps (e.g., Headspace, Smiling Mind)',
          sub: [
            'Practice mindful awareness of your emotions. Ask yourself what emotion you’re feeling now, and what that feels like in your body, but don’t try to change it. Imagine the emotion as a cloud passing in the sky; it will eventually pass, but don’t try to rush it along. You may find that mindfully accepting your emotion takes away some of its intensity',
          ],
        },
      ],
    },
    {
      title: 'Problem-Solving',
      description:
        'Taking action to change the situation that is causing the emotion',
      choice: 'PS',
      option: 'problem-solve',
      pro:
        'Very helpful in situations that you can and should try to change (e.g., a misunderstanding with your friend); Can get to the root of what caused your emotion and may keep similar problems from happening again.',
      con:
        'Can lead to frustration if you are trying to change a situation that is not within your control (e.g., having a boring teacher); Can be counterproductive if used routinely to avoid experiencing and learning to cope with difficult emotions (e.g., asking for help with a math problem that looks hard before trying to figure it out yourself).',
      todos: [
        {
          main:
            'Follow these problem-solving steps in situations that you can and should change:',
          sub: [
            'Define the problem',
            'Generate alternative solutions',
            'Choose a solution by examining the pros and cons',
            'Try the solution',
          ],
        },
        {
          main:
            'Think about how you should manage your emotions in situations that you cannot or should not change:',
          sub: [
            'Consider trying other emotion regulation strategies such as reappraisal or distraction',
          ],
        },
      ],
    },
    {
      title: 'Reappraisal',
      description: 'Changing your interpretation of the situation',
      choice: 'RE',
      option: 'reappraise the situation',
      pro:
        'Allows you to see a situation from different angles (e.g., positive or neutral points of view); Tends to help you feel better both in the moment and in the longer term; Frequent use is linked to better mental health.',
      con:
        'Requires moderate brain effort; Is difficult to do when you are experiencing a strong emotion (you may need to calm down first); Can be counterproductive when used in situations that you can and should try to change (e.g., a friend treating you unfairly).',
      todos: [
        {
          main:
            'Recognize that there are many ways to view the same situation, and brainstorm different ways to interpret emotional situations that might help you feel better.',
          sub: [],
        },
        {
          main: 'Ask yourself:',
          sub: [
            'Is there another way to look at this?',
            'How might this actually be a good thing?',
            'What are two other possible reasons this could have happened?',
          ],
        },
        {
          main: 'Be kinder and more compassionate towards yourself.',
          sub: [
            "Ask yourself 'What would I say to a friend who is in this situation?' Then say that to yourself!",
          ],
        },
      ],
    },
    {
      title: 'Rumination',
      description:
        'Thinking repetitively about the situation, its causes and consequences',
      choice: 'RU',
      option: 'reappraise the situation',
      pro:
        'Allows you to reflect on the situation and potentially learn something from it.',
      con:
        'Often involves dwelling on negative aspects of the situation; May heighten unpleasant emotions; Frequent use is linked to worse mental health.',
      todos: [
        {
          main: 'Ground yourself to interrupt rumination',
          sub: [
            'When you notice yourself ruminating, take a moment to name 5 things you see, 4 things you hear, and 3 things you can touch',
          ],
        },
        {
          main: 'Schedule a daily 20-minute rumination break',
          sub: [
            'Let yourself dwell on whatever you want during the break',
            'Make sure you move onto something more productive when time is up',
            'If you begin to ruminate at other times of the day, remind yourself that you will have time to think about it later or tomorrow',
          ],
        },
      ],
    },
    {
      title: 'Somatic Relaxation',
      description:
        'Releasing tension in our bodies through deep breathing, muscle relaxation, stretching, etc.',
      choice: 'SO',
      option: 'use somatic relaxation',
      pro:
        'Reduces emotional tension in our bodies when we’re experiencing a high-energy, unpleasant emotion such as anger or anxiety; Gives us more space to respond thoughtfully to our emotions rather than reacting impulsively.',
      con:
        'Less useful for low-energy emotions such as sadness; Is a great first step, but often works best when followed by another strategy.',
      todos: [
        {
          main:
            'Try taking some slow, deep breaths when you feel angry or anxious',
          sub: [
            'Inhale deeply through your nose for 4 seconds, hold your breath for a second, then exhale slowly through your mouth for 8 seconds. Repeat the steps for 1 minute.',
          ],
        },
        {
          main:
            'When you feel angry or anxious, notice the places in your body where your muscles may be tensing up (for example, your shoulders, neck, or jaw). Make a conscious effort to relax those muscles by physically releasing or stretching them, and notice if that changes how worked-up you feel.',
          sub: [],
        },
      ],
    },
  ],
  reflections: [
    'Does your emotion regulation strategy profile seem accurate to you? That is, does it match how you think you manage your emotions in school? If so, in what ways does your profile seem accurate? If not, in what ways does it seem inaccurate?',
    'Do the emotion regulation strategies that you use help you to: (1) meet your needs in the short term (e.g., feel better, avoid conflict) or (2) achieve your goals in the long term (e.g., complete tasks, strengthen relationships)?',
    'How helpful to you are the emotion regulation strategies that you use frequently? Are there other strategies that might be helpful that you’d like to try out?',
  ],
};
