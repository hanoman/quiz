$(document).ready(function() {

    /***************************************************
    Quiz Mod
    ****************************************************/
    var kTypes = ['nantucket', 'hazelnut', 'columbian', 'breakfast', 'vanilla'];
    values = {
        'nantucket': {
            amount: 0
        },
        'hazelnut': {
            amount: 0
        },
        'columbian': {
            amount: 0
        },
        'breakfast': {
            amount: 0
        },
        'vanilla': {
            amount: 0
        }
    }

    var questions = [
        "How would you describe your palate?",
        "When you wake up in the morning, what's the first thing you do?",
        "Life is:",
        "What is your dream vacation?",
        "At a party, you are most likely to:",
        "You like your coffee with:"
    ]

    q1A = {
        'a1': {
            txt: 'Complex'
        },
        'a2': {
            txt: 'Natural'
        },
        'a3': {
            txt: 'Sweet and nutty'
        },
        'a4': {
            txt: 'Crisp and citrusy'
        },
        'a5': {
            txt: 'Creamy and refined'
        }
    }

    q2A = {
        'a1': {
            txt: 'Lie in bed and daydream.'
        },
        'a2': {
            txt: 'Get up and stretch.'
        },
        'a3': {
            txt: 'Who says I have to wake up in the morning?'
        },
        'a4': {
            txt: 'I need to eat or else ...'
        },
        'a5': {
            txt: 'Start the to-do list — after warm coffee of course.'
        }
    }

    q3A = {
        'a1': {
            txt: "An oyster — where's the pearl?"
        },
        'a2': {
            txt: 'Beautiful — just look outside.'
        },
        'a3': {
            txt: 'Short — live more.'
        },
        'a4': {
            txt: 'Precious — use caution.'
        },
        'a5': {
            txt: 'Easy — just smile.'
        }
    }

    q4A = {
        'a1': {
            txt: "Let's see, where have I not visited ... ?"
        },
        'a2': {
            txt: 'Anything adventurous and outdoors.'
        },
        'a3': {
            txt: 'Wherever the sun is.'
        },
        'a4': {
            txt: 'New England.'
        },
        'a5': {
            txt: 'Paris or a Tuscan villa.'
        }
    }

    q5A = {
        'a1': {
            txt: 'Meet someone new.'
        },
        'a2': {
            txt: 'Skip the pool and jump in the lake.'
        },
        'a3': {
            txt: 'Find another party.'
        },
        'a4': {
            txt: 'Leave before midnight.'
        },
        'a5': {
            txt: 'Be the new person someone wants to meet.'
        }
    }

    q6A = {
        'a1': {
            txt: 'A variety of tastes.'
        },
        'a2': {
            txt: 'Guilt-free indulgence.'
        },
        'a3': {
            txt: "Gramma's best recipes."
        },
        'a4': {
            txt: 'Breakfast.'
        },
        'a5': {
            txt: 'Just a pastry, please.'
        }
    }

    var answers = [q1A, q2A, q3A, q4A, q5A, q6A];

    var quizLinks = [
        'http://www.samsclub.com/sams/green-mountain-coffee-nantucket-blend-80-ct-k-cup-portion-packs/prod4430002.ip?cid=TDM|02_CAF_46830_KeurigCB|NantucketBlend',
        'http://www.samsclub.com/sams/green-mountain-hazelnut-coffee-keurig-k-cups/203324.ip?cid=TDM|02_CAF_46830_KeurigCB|Hazelnut',
        'http://www.samsclub.com/sams/colombian-fair-trade-select-80-k-cup-portion-packs/prod4430001.ip?cid=TDM|02_CAF_46830_KeurigCB|ColombianFairTrade',
        'http://www.samsclub.com/sams/breakfast-blend-decaf-80-k-cup-portion-packs/prod3320196.ip?cid=TDM|02_CAF_46830_KeurigCB|BreakfastBlendDecaf',
        'http://www.samsclub.com/sams/green-mountain-french-vanilla-k-cups/prod1420383.ip?cid=TDM|02_CAF_46830_KeurigCB|FrenchVanilla'
    ];

    var curQuestion = 0;
    var quizEndProd;

    $('.beginQuizHS').on('click', function(e) {
        e.preventDefault();
        changeQuestion(curQuestion);
    });

    function changeQuestion(which) {
        TweenMax.to($('.quiz'), .35, {
            css: {
                autoAlpha: 0
            },
            ease: Quad.easeOut,
            onComplete: function() {
                $('.quiz').empty();

                $('.quiz').append(" \
                <h2>" + questions[which] + "</h2> \
                <ul class='quizAnswers'> \
                    <li><a href='' class='qa1' rel='nantucket'><div class='radioBtn' track='CC_Question" + String(which) + "_Answer1'></div>" + answers[which]['a1'].txt + "</a></li> \
                    <li><a href='' class='qa2' rel='hazelnut'><div class='radioBtn' track='CC_Question" + String(which) + "_Answer2'></div>" + answers[which]['a2'].txt + "</a></li> \
                    <li><a href='' class='qa3' rel='columbian'><div class='radioBtn' track='CC_Question" + String(which) + "_Answer3'></div>" + answers[which]['a3'].txt + "</a></li> \
                    <li><a href='' class='qa4' rel='breakfast'><div class='radioBtn' track='CC_Question" + String(which) + "_Answer4'></div>" + answers[which]['a4'].txt + "</a></li> \
                    <li><a href='' class='qa5' rel='vanilla'><div class='radioBtn' track='CC_Question" + String(which) + "_Answer5'></div>" + answers[which]['a5'].txt + "</a></li> \
                </ul> \
                <div class='questionNumber'><span><i>" + String(curQuestion + 1) + "/6</i></span></div> \
            ");
                TweenMax.to($('.quiz'), .35, {
                    css: {
                        autoAlpha: 1
                    },
                    ease: Quad.easeOut
                });
            }
        });
    }

    $('.quizAnswers a').live('mouseenter', function() {
        $(this).find('.radioBtn').addClass('radioBtnSelected');
    });
    $('.quizAnswers a').live('mouseleave', function() {
        $(this).find('.radioBtn').removeClass('radioBtnSelected');
    });
    $('.quizAnswers a').live('click', function(e) {
        e.preventDefault();

        values[$(this).attr('rel')].amount++;

        if (curQuestion < questions.length - 1) {
            curQuestion++;
            changeQuestion(curQuestion);
        } else
            showResults();
    });

    function showResults() {
        var totals = [values['nantucket'].amount, values['hazelnut'].amount, values['columbian'].amount, values['breakfast'].amount, values['vanilla'].amount];
        var largest = Math.max.apply(Math, totals);
        var totalIndex = totals.indexOf(largest);

        TweenMax.to($('.quiz'), .35, {
            css: {
                autoAlpha: 0
            },
            ease: Quad.easeOut,
            onComplete: function() {
                $('.quiz').empty();
                $('.quiz').append(' \
                <img src="Media/images/quizResults/' + kTypes[totalIndex] + '.png" class="quizResultImg"> \
                <a href="' + quizLinks[totalIndex] + '" class="quizResultBuyKcup" track="CC_QuizBuy_' + kTypes[totalIndex] + '"></a> \
                <a href="" class="takeQuizAgain" track="CC_TakeQuizAgain"></a> \
            ');
                $('.quizResultImg').load(function() {
                    TweenMax.to($('.quiz'), .35, {
                        css: {
                            autoAlpha: 1
                        },
                        ease: Quad.easeOut
                    });
                });
            }
        });
    }

    $('.takeQuizAgain').live('click', function(e) {
        e.preventDefault();
        takeQuizAgain();
    });

    function takeQuizAgain() {
        values = {
            'nantucket': {
                amount: 0
            },
            'hazelnut': {
                amount: 0
            },
            'columbian': {
                amount: 0
            },
            'breakfast': {
                amount: 0
            },
            'vanilla': {
                amount: 0
            }
        }

        curQuestion = 0;
        changeQuestion(curQuestion);
    }

}); // end of document ready