// AUTO-GENERATED from data/sheets.json. Do not edit by hand.
// Re-generate via: python generate_sheets_gs.py

const SHEETS_DATA = {
  "version": "1.0",
  "tolerance": 1.0,
  "hintBudget": 5,
  "colors": {
    "black": {
      "hex": "#1a1a1a",
      "label": "Black",
      "range": [
        500,
        1857
      ]
    },
    "yellow": {
      "hex": "#f4d03f",
      "label": "Yellow",
      "range": [
        1857,
        3214
      ]
    },
    "brown": {
      "hex": "#7d4f2a",
      "label": "Brown",
      "range": [
        3214,
        4571
      ]
    },
    "skyblue": {
      "hex": "#5bc0eb",
      "label": "Sky Blue",
      "range": [
        4571,
        5928
      ]
    },
    "green": {
      "hex": "#1e7a3c",
      "label": "Green",
      "range": [
        5928,
        7285
      ]
    },
    "white": {
      "hex": "#ffffff",
      "label": "White",
      "range": [
        7285,
        8642
      ]
    },
    "yellowgreen": {
      "hex": "#a8d65c",
      "label": "Yellow Green",
      "range": [
        8642,
        9999
      ]
    }
  },
  "questionColorSlots": [
    "black",
    "yellow",
    "brown",
    "skyblue",
    "green",
    "white",
    "yellowgreen",
    "black",
    "yellow",
    "brown",
    "skyblue",
    "green"
  ],
  "layout": [
    [
      "A1",
      "B1",
      "C1",
      "D1"
    ],
    [
      "A2",
      "B2",
      "C2",
      "D2"
    ],
    [
      "A3",
      "B3",
      "C3",
      "D3"
    ],
    [
      "A4",
      "B4",
      "C4",
      "D4"
    ]
  ],
  "sheets": {
    "A1": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Tatiana and Dakota deposit $145.24 every month into an RESP for their newborn. The account earns 6.11%/a compounded monthly. How much will they have saved after 1 year?",
          "pmt": 145.24,
          "rate": 6.11,
          "cy": 12,
          "years": 1,
          "answer": 1792.53,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Hank deposits $114.70 every 3 months into a savings account for university. The account pays 6.25%/a compounded quarterly. What will the balance be after 5 years?",
          "pmt": 114.7,
          "rate": 6.25,
          "cy": 4,
          "years": 5,
          "answer": 2668.67,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Yohan invests $295.77 once per year into a growth fund earning 3.58%/a compounded annually. How much will the fund be worth after 11 years?",
          "pmt": 295.77,
          "rate": 3.58,
          "cy": 1,
          "years": 11,
          "answer": 3903.1,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Olivia wants to withdraw $107.27 every 2 weeks for 2 years while travelling. Her account pays 6.11%/a compounded biweekly. What balance must she start with?",
          "pmt": 107.27,
          "rate": 6.11,
          "cy": 26,
          "years": 2,
          "answer": 5244.9,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Elijah will receive $282.70 each month for 2 years to cover living costs during school. His account pays 4.7%/a compounded monthly. What is the present value of the annuity?",
          "pmt": 282.7,
          "rate": 4.7,
          "cy": 12,
          "years": 2,
          "answer": 6463.61,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Alexander is converting his RRSP into an income fund that pays $251.10 every 3 months for 11 years. The fund earns 6.04%/a compounded quarterly. How much must he invest now?",
          "pmt": 251.1,
          "rate": 6.04,
          "cy": 4,
          "years": 11,
          "answer": 8029.48,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Ian and Mesgana deposit $598.01 every 6 months into an RESP earning 13.49%/a compounded semi-annually. After 9 years, how much interest will the account have earned?",
          "pmt": 598.01,
          "rate": 13.49,
          "cy": 2,
          "years": 9,
          "answer": 9076.48,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Dakota saves $638.61 every 6 months in a growth account that earns 12.74%/a compounded semi-annually. After 4 years, how much interest has the account earned?",
          "pmt": 638.61,
          "rate": 12.74,
          "cy": 2,
          "years": 4,
          "answer": 1296.3,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "David deposits $60.55 every 2 weeks for 6 years into an account paying 6.76%/a compounded biweekly. What is the total interest earned?",
          "pmt": 60.55,
          "rate": 6.76,
          "cy": 26,
          "years": 6,
          "answer": 2184.76,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "A family financed a major home repair with biweekly payments of $10,472 for 1 year at 2.97%/a compounded biweekly. What was the total interest paid?",
          "pmt": 10472.0,
          "rate": 2.97,
          "cy": 26,
          "years": 1,
          "answer": 4154.35,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Beatrice pays off her student loan with semi-annual payments of $2,221 over 8 years. The loan charges 3.74%/a compounded semi-annually. How much interest will she pay in total?",
          "pmt": 2221.0,
          "rate": 3.74,
          "cy": 2,
          "years": 8,
          "answer": 5067.03,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Ross took out a small-business loan and pays $377 each month for 11 years at 2.46%/a compounded monthly. What is the total interest paid?",
          "pmt": 377.0,
          "rate": 2.46,
          "cy": 12,
          "years": 11,
          "answer": 6203.57,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        5,
        5,
        5,
        5,
        10,
        3,
        10,
        3,
        10,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        10,
        3,
        10,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        10,
        3,
        10,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        10,
        3,
        10,
        3,
        5,
        5,
        5,
        5,
        7,
        0,
        7,
        0,
        7,
        10,
        3,
        10,
        0,
        7,
        0,
        1,
        8,
        1,
        7,
        10,
        3,
        7,
        0,
        1,
        8,
        1,
        8,
        0,
        7,
        10,
        0,
        1,
        8,
        1,
        7,
        0,
        7,
        9,
        2,
        3,
        7,
        0,
        7,
        0,
        2,
        9,
        2,
        9,
        2
      ]
    },
    "B1": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Beatrice transfers $7.55 every 2 weeks from her chequing into a TFSA earning 6.08%/a compounded biweekly. How much will the TFSA hold after 4 years?",
          "pmt": 7.55,
          "rate": 6.08,
          "cy": 26,
          "years": 4,
          "answer": 887.75,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "David deposits $8.25 every 2 weeks into a university savings account that earns 1.17%/a compounded biweekly. What will the balance be after 11 years?",
          "pmt": 8.25,
          "rate": 1.17,
          "cy": 26,
          "years": 11,
          "answer": 2517.46,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Determine the future value of an annuity with semi-annual deposits of $634.27 at 6.79%/a compounded semi-annually for 3 years.",
          "pmt": 634.27,
          "rate": 6.79,
          "cy": 2,
          "years": 3,
          "answer": 4143.62,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Future Electronics advertises a TV with no money down and 8 equal quarterly payments of $666.03. Interest is charged at 1.65%/a compounded quarterly. What is the equivalent cash price?",
          "pmt": 666.03,
          "rate": 1.65,
          "cy": 4,
          "years": 2.0,
          "answer": 5230.68,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Saul is converting his RRSP into an income fund that pays $76.31 each month for 9 years. The fund earns 4.71%/a compounded monthly. How much must he invest now?",
          "pmt": 76.31,
          "rate": 4.71,
          "cy": 12,
          "years": 9,
          "answer": 6706.87,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Shendrita pays off her student line of credit with quarterly payments of $334.41 for 7 years. The line of credit charges 6.11%/a compounded quarterly. How much did she originally borrow?",
          "pmt": 334.41,
          "rate": 6.11,
          "cy": 4,
          "years": 7,
          "answer": 7572.25,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Darryl deposits $39.34 every 2 weeks into a high-interest account paying 12.15%/a compounded biweekly. After 10 years, how much interest will the account have earned?",
          "pmt": 39.34,
          "rate": 12.15,
          "cy": 26,
          "years": 10,
          "answer": 9645.59,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Saul saves $67.94 every 6 months in an account earning 6.17%/a compounded semi-annually. After 11 years, what is the total interest earned?",
          "pmt": 67.94,
          "rate": 6.17,
          "cy": 2,
          "years": 11,
          "answer": 600.11,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Sydiem and Daija deposit $17,475.52 every 3 months into an RESP earning 8.08%/a compounded quarterly. After 1 year, how much interest will the RESP have earned?",
          "pmt": 17475.52,
          "rate": 8.08,
          "cy": 4,
          "years": 1,
          "answer": 2146.7,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Curtiss and Melissa financed a major appliance package with semi-annual payments of $17,332 over 4 years at 1.38%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 17332.0,
          "rate": 1.38,
          "cy": 2,
          "years": 4,
          "answer": 4208.1,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Junetta is paying off a home renovation loan with biweekly payments of $107.00 for 8 years at 6.55%/a compounded biweekly. What is the total interest paid?",
          "pmt": 107.0,
          "rate": 6.55,
          "cy": 26,
          "years": 8,
          "answer": 4949.73,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Clarence took out a debt-consolidation loan and pays $11,858 every 6 months for 3 years at 5.21%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 11858.0,
          "rate": 5.21,
          "cy": 2,
          "years": 3,
          "answer": 6061.39,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        5,
        5,
        10,
        3,
        7,
        0,
        7,
        0,
        7,
        5,
        5,
        5,
        10,
        3,
        7,
        8,
        1,
        8,
        0,
        7,
        0,
        7,
        10,
        3,
        7,
        0,
        1,
        7,
        0,
        7,
        8,
        1,
        3,
        10,
        3,
        7,
        8,
        0,
        3,
        7,
        0,
        1,
        3,
        10,
        3,
        7,
        8,
        0,
        3,
        10,
        0,
        1,
        7,
        10,
        3,
        7,
        8,
        1,
        7,
        10,
        0,
        7,
        0,
        7,
        0,
        7,
        8,
        1,
        7,
        0,
        7,
        0,
        7,
        0,
        7,
        9,
        2,
        8,
        1,
        7,
        0,
        1,
        7,
        0,
        2,
        9,
        2,
        9,
        0,
        1,
        8,
        1
      ]
    },
    "C1": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Agatha invests $95.16 at the end of each year into a GIC paying 2.98%/a compounded annually. After 8 years, how much will the GIC be worth?",
          "pmt": 95.16,
          "rate": 2.98,
          "cy": 1,
          "years": 8,
          "answer": 845.59,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Evelyn and Biff deposit $465.68 every 6 months into an RESP earning 4.47%/a compounded semi-annually. What will the balance be after 3 years?",
          "pmt": 465.68,
          "rate": 4.47,
          "cy": 2,
          "years": 3,
          "answer": 2954.93,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Christian deposits $1,635.04 every 6 months into a university savings account earning 6.66%/a compounded semi-annually. How much will be saved after 1 year?",
          "pmt": 1635.04,
          "rate": 6.66,
          "cy": 2,
          "years": 1,
          "answer": 3324.53,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Monica wants to withdraw $1,741.71 once per year for 3 years while she takes a sabbatical. Her account pays 4.03%/a compounded annually. What balance must she start with?",
          "pmt": 1741.71,
          "rate": 4.03,
          "cy": 1,
          "years": 3,
          "answer": 4830.65,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Phil is converting his RRSP into an income fund that pays $88.87 each month for 6 years. The fund earns 2.36%/a compounded monthly. How much must he invest now?",
          "pmt": 88.87,
          "rate": 2.36,
          "cy": 12,
          "years": 6,
          "answer": 5960.81,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Bryan plans to withdraw $112.34 every 2 weeks for 3 years from an account earning 3.8%/a compounded biweekly. What is the present value of the annuity?",
          "pmt": 112.34,
          "rate": 3.8,
          "cy": 26,
          "years": 3,
          "answer": 8275.8,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Sharon began depositing $239.74 monthly into a high-interest account when she was 9. The account earns 13.31%/a compounded monthly. At age 15, how much interest has the account earned?",
          "pmt": 239.74,
          "rate": 13.31,
          "cy": 12,
          "years": 6,
          "answer": 8950.06,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Stuart and Ariyana deposit $6.46 every 2 weeks into an RESP earning 11.41%/a compounded biweekly. After 10 years, how much interest will the RESP have earned?",
          "pmt": 6.46,
          "rate": 11.41,
          "cy": 26,
          "years": 10,
          "answer": 1444.21,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Stephen saves $4,337.31 every 6 months in a workplace investment account earning 5.83%/a compounded semi-annually. After 3 years, what is the total interest earned?",
          "pmt": 4337.31,
          "rate": 5.83,
          "cy": 2,
          "years": 3,
          "answer": 1971.83,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Marilyn pays off a home renovation loan with monthly payments of $1,745.00 for 6 years at 1.08%/a compounded monthly. What is the total interest paid?",
          "pmt": 1745.0,
          "rate": 1.08,
          "cy": 12,
          "years": 6,
          "answer": 4037.17,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Josiah and Ruby financed a basement renovation with quarterly payments of $2,282 for 4 years at 6.99%/a compounded quarterly. What is the total interest paid?",
          "pmt": 2282.0,
          "rate": 6.99,
          "cy": 4,
          "years": 4,
          "answer": 4898.85,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Rachel is repaying a government-backed business loan with semi-annual payments of $74,317 for 1 year at 5.82%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 74317.0,
          "rate": 5.82,
          "cy": 2,
          "years": 1,
          "answer": 6244.99,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        5,
        5,
        5,
        5,
        5,
        10,
        3,
        10,
        3,
        10,
        0,
        7,
        5,
        5,
        5,
        10,
        3,
        10,
        3,
        10,
        1,
        7,
        5,
        5,
        5,
        10,
        3,
        10,
        3,
        10,
        0,
        7,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        7,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        0,
        7,
        10,
        3,
        10,
        3,
        10,
        0,
        7,
        0,
        7,
        0,
        7,
        10,
        0,
        7,
        0,
        1,
        8,
        1,
        8,
        1,
        8,
        0,
        7,
        0,
        1,
        8,
        0,
        2,
        8,
        1,
        8,
        1,
        7,
        8,
        0,
        7,
        9,
        1
      ]
    },
    "D1": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Junetta deposits $2.52 every 2 weeks into an RRSP earning 3.74%/a compounded biweekly. How much will she have after 9 years?",
          "pmt": 2.52,
          "rate": 3.74,
          "cy": 26,
          "years": 9,
          "answer": 700.47,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Nathan invests $90.56 every 6 months into a growth fund earning 4.2%/a compounded semi-annually. After 10 years, how much will the fund be worth?",
          "pmt": 90.56,
          "rate": 4.2,
          "cy": 2,
          "years": 10,
          "answer": 2222.41,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Jewell invests $291.92 at the end of each year into an account paying 6%/a compounded annually. After 10 years, what is the balance?",
          "pmt": 291.92,
          "rate": 6.0,
          "cy": 1,
          "years": 10,
          "answer": 3847.74,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Future Electronics is selling a sound system with no money down and 48 equal monthly payments of $128.26 at 3.5%/a compounded monthly. What is the equivalent cash price?",
          "pmt": 128.26,
          "rate": 3.5,
          "cy": 12,
          "years": 4.0,
          "answer": 5737.16,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Shendrita pays off a student loan with biweekly payments of $40.96 for 8 years at 6.53%/a compounded biweekly. How much did she originally borrow?",
          "pmt": 40.96,
          "rate": 6.53,
          "cy": 26,
          "years": 8,
          "answer": 6629.76,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Ben plans to withdraw $2,222.04 once per year for 4 years from an account earning 1.36%/a compounded annually. What is the present value of the annuity?",
          "pmt": 2222.04,
          "rate": 1.36,
          "cy": 1,
          "years": 4,
          "answer": 8593.99,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Cliff saves $1,213.46 every 2 weeks into a high-interest account paying 14.09%/a compounded biweekly. After 2 years, how much interest will the account have earned?",
          "pmt": 1213.46,
          "rate": 14.09,
          "cy": 26,
          "years": 2,
          "answer": 9562.5,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Biff deposits $1,420.83 each year into a TFSA earning 5.65%/a compounded annually. After 6 years, what is the total interest earned?",
          "pmt": 1420.83,
          "rate": 5.65,
          "cy": 1,
          "years": 6,
          "answer": 1298.8,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Marilyn began depositing $47,188.04 each year into a family-business reserve account when she was 9. The account earns 5.6%/a compounded annually. At age 11, how much interest has the account earned?",
          "pmt": 47188.04,
          "rate": 5.6,
          "cy": 1,
          "years": 2,
          "answer": 2642.53,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Miranda is repaying her student loan with biweekly payments of $10,337 for 1 year at 3.3%/a compounded biweekly. What is the total interest paid?",
          "pmt": 10337.0,
          "rate": 3.3,
          "cy": 26,
          "years": 1,
          "answer": 4551.08,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Moe took out a small business loan and pays $222.00 each month for 9 years at 5.01%/a compounded monthly. What is the total interest paid?",
          "pmt": 222.0,
          "rate": 5.01,
          "cy": 12,
          "years": 9,
          "answer": 4708.68,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Nicole is paying off a kitchen renovation with biweekly payments of $6,190 for 2 years at 2.11%/a compounded biweekly. What is the total interest paid?",
          "pmt": 6190.0,
          "rate": 2.11,
          "cy": 26,
          "years": 2,
          "answer": 6822.28,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        3,
        10,
        3,
        10,
        5,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        5,
        5,
        5,
        5,
        5,
        10,
        5,
        10,
        3,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        10,
        3,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        10,
        3,
        5,
        5,
        5,
        10,
        3,
        5,
        5,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        5,
        5,
        10,
        3,
        7,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        10,
        1,
        7,
        0,
        3,
        10,
        3,
        10,
        3,
        10,
        3,
        9,
        0,
        3,
        10,
        3,
        10,
        3,
        10,
        6,
        11,
        0,
        3,
        10,
        3,
        6,
        6,
        11,
        6,
        11,
        4
      ]
    },
    "A2": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Bob deposits $4.96 every 2 weeks into a university savings account earning 4.09%/a compounded biweekly. What will the balance be after 7 years?",
          "pmt": 4.96,
          "rate": 4.09,
          "cy": 26,
          "years": 7,
          "answer": 1044.27,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Sally and Saul deposit $32.14 every month into an RESP earning 1.63%/a compounded monthly. How much will they have saved after 6 years?",
          "pmt": 32.14,
          "rate": 1.63,
          "cy": 12,
          "years": 6,
          "answer": 2429.29,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Paula invests $407.15 at the end of each year into a retirement account paying 2.02%/a compounded annually. After 9 years, what is the balance?",
          "pmt": 407.15,
          "rate": 2.02,
          "cy": 1,
          "years": 9,
          "answer": 3974.82,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Emily wants to withdraw $773.16 once per year for 9 years while she travels. Her account earns 3.82%/a compounded annually. What balance must she start with?",
          "pmt": 773.16,
          "rate": 3.82,
          "cy": 1,
          "years": 9,
          "answer": 5796.15,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Bryan will receive $166.03 every 3 months for 11 years from an annuity earning 1.18%/a compounded quarterly. What is the present value of the annuity?",
          "pmt": 166.03,
          "rate": 1.18,
          "cy": 4,
          "years": 11,
          "answer": 6841.62,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Sydiem is converting his RRSP into an income fund that pays $572.85 every 3 months for 4 years. The fund earns 4.85%/a compounded quarterly. How much must he invest now?",
          "pmt": 572.85,
          "rate": 4.85,
          "cy": 4,
          "years": 4,
          "answer": 8285.92,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Alexander saves $6,124.35 every 6 months in a workplace investment account earning 9.32%/a compounded semi-annually. After 4 years, what is the total interest earned?",
          "pmt": 6124.35,
          "rate": 9.32,
          "cy": 2,
          "years": 4,
          "answer": 8780.86,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Alex and Melissa deposit $11.51 every month into an RESP earning 12.72%/a compounded monthly. After 9 years, how much interest will the RESP have earned?",
          "pmt": 11.51,
          "rate": 12.72,
          "cy": 12,
          "years": 9,
          "answer": 1062.11,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Sharon began depositing $29,362.45 every 3 months into a family savings account when she was 9. The account earns 6.27%/a compounded quarterly. At age 10, how much interest has the account earned?",
          "pmt": 29362.45,
          "rate": 6.27,
          "cy": 4,
          "years": 1,
          "answer": 2790.51,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Jordan is paying off a home renovation loan with biweekly payments of $118.00 for 10 years at 2.5%/a compounded biweekly. What is the total interest paid?",
          "pmt": 118.0,
          "rate": 2.5,
          "cy": 26,
          "years": 10,
          "answer": 3545.91,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Emmanuel took out a vehicle loan and pays $6,375 every 3 months for 4 years at 2.7%/a compounded quarterly. What is the total interest paid?",
          "pmt": 6375.0,
          "rate": 2.7,
          "cy": 4,
          "years": 4,
          "answer": 5622.63,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Natasha is repaying her student loan with biweekly payments of $2,117 for 4 years at 1.42%/a compounded biweekly. What is the total interest paid?",
          "pmt": 2117.0,
          "rate": 1.42,
          "cy": 26,
          "years": 4,
          "answer": 6192.83,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        3,
        10,
        3,
        7,
        8,
        1,
        8,
        1,
        8,
        0,
        3,
        10,
        3,
        10,
        0,
        7,
        8,
        1,
        7,
        0,
        3,
        10,
        6,
        6,
        10,
        3,
        7,
        0,
        3,
        7,
        11,
        6,
        6,
        11,
        4,
        10,
        3,
        10,
        3,
        7,
        11,
        4,
        11,
        4,
        11,
        6,
        11,
        3,
        7,
        9,
        6,
        11,
        6,
        11,
        4,
        11,
        3,
        10,
        0,
        2,
        4,
        11,
        4,
        11,
        6,
        11,
        3,
        7,
        0,
        2,
        9,
        10,
        2,
        9,
        10,
        3,
        10,
        0,
        7,
        8,
        9,
        2,
        9,
        10,
        3,
        10,
        3,
        7,
        0,
        1,
        2,
        9,
        2,
        3,
        10,
        3,
        10,
        0,
        2,
        7
      ]
    },
    "B2": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Determine the future value of an annuity with semi-annual deposits of $51.95 at 5.3%/a compounded semi-annually for 10 years.",
          "pmt": 51.95,
          "rate": 5.3,
          "cy": 2,
          "years": 10,
          "answer": 1347.27,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Daija invests $326.31 at the end of every 6 months into an account paying 6.96%/a compounded semi-annually. After 4 years, what is the balance?",
          "pmt": 326.31,
          "rate": 6.96,
          "cy": 2,
          "years": 4,
          "answer": 2951.56,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Sydiem deposits $180.96 every 3 months into a growth fund earning 5.5%/a compounded quarterly. After 5 years, how much will the fund be worth?",
          "pmt": 180.96,
          "rate": 5.5,
          "cy": 4,
          "years": 5,
          "answer": 4133.34,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Future Electronics is selling a home theatre with no money down and 6 equal semi-annual payments of $831.06 at 3.87%/a compounded semi-annually. What is the equivalent cash price?",
          "pmt": 831.06,
          "rate": 3.87,
          "cy": 2,
          "years": 3.0,
          "answer": 4665.35,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Isaiah plans to withdraw $421.98 every 6 months for 9 years from an account earning 4.75%/a compounded semi-annually. What is the present value of the annuity?",
          "pmt": 421.98,
          "rate": 4.75,
          "cy": 2,
          "years": 9,
          "answer": 6122.62,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Steve is converting his RRSP into an income fund that pays $210.01 every 3 months for 11 years. The fund earns 1.53%/a compounded quarterly. How much must he invest now?",
          "pmt": 210.01,
          "rate": 1.53,
          "cy": 4,
          "years": 11,
          "answer": 8489.8,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Victor and Marilyn deposit $1,714.29 once per year into an RESP earning 14.61%/a compounded annually. After 8 years, how much interest will the RESP have earned?",
          "pmt": 1714.29,
          "rate": 14.61,
          "cy": 1,
          "years": 8,
          "answer": 9483.26,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Heidi began depositing $391.82 each year into an investment account when she was 9. The account earns 5.63%/a compounded annually. At age 19, how much interest has the account earned?",
          "pmt": 391.82,
          "rate": 5.63,
          "cy": 1,
          "years": 10,
          "answer": 1157.43,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Jevon deposits $137.79 every 3 months into a high-interest account paying 13.01%/a compounded quarterly. After 8 years, what is the total interest earned?",
          "pmt": 137.79,
          "rate": 13.01,
          "cy": 4,
          "years": 8,
          "answer": 3152.57,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Cam took out a vehicle loan and pays $1,237 each year for 11 years at 5.63%/a compounded annually. What is the total interest paid?",
          "pmt": 1237.0,
          "rate": 5.63,
          "cy": 1,
          "years": 11,
          "answer": 3663.64,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Jennifer is repaying her student loan with quarterly payments of $3,410 for 4 years at 4.52%/a compounded quarterly. What is the total interest paid?",
          "pmt": 3410.0,
          "rate": 4.52,
          "cy": 4,
          "years": 4,
          "answer": 4903.42,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Hasan and Mesgana financed a basement finishing with monthly payments of $291.00 over 11 years at 3.24%/a compounded monthly. What is the total interest paid?",
          "pmt": 291.0,
          "rate": 3.24,
          "cy": 12,
          "years": 11,
          "answer": 6135.67,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        0,
        7,
        9,
        2,
        9,
        0,
        7,
        8,
        1,
        8,
        0,
        1,
        8,
        1,
        2,
        7,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        0,
        1,
        7,
        0,
        7,
        8,
        1,
        8,
        1,
        8,
        0,
        7,
        0,
        5,
        7,
        9,
        2,
        9,
        0,
        7,
        0,
        5,
        5,
        5,
        7,
        9,
        2,
        9,
        1,
        8,
        1,
        7,
        5,
        5,
        5,
        9,
        2,
        9,
        1,
        8,
        1,
        8,
        0,
        5,
        5,
        9,
        2,
        8,
        1,
        7,
        8,
        1,
        8,
        0,
        7,
        8,
        1,
        8,
        0,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        0,
        7,
        8,
        1,
        8,
        1,
        8,
        1
      ]
    },
    "C2": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Sopie invests $53.69 at the end of each year into an account paying 4.51%/a compounded annually. After 11 years, what is the balance?",
          "pmt": 53.69,
          "rate": 4.51,
          "cy": 1,
          "years": 11,
          "answer": 743.52,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Yolanda and Peter deposit $96.19 every 6 months into an RESP earning 6.79%/a compounded semi-annually. After 9 years, what is the balance?",
          "pmt": 96.19,
          "rate": 6.79,
          "cy": 2,
          "years": 9,
          "answer": 2334.23,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Ross deposits $43.76 every 2 weeks into a university savings account earning 5.24%/a compounded biweekly. What will the balance be after 3 years?",
          "pmt": 43.76,
          "rate": 5.24,
          "cy": 26,
          "years": 3,
          "answer": 3692.17,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Eleanor wins a charity prize that pays her $1,217.68 each year for 4 years. The charity funds the prize from an account earning 2.49%/a compounded annually. How much must the charity set aside now?",
          "pmt": 1217.68,
          "rate": 2.49,
          "cy": 1,
          "years": 4,
          "answer": 4581.98,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Jennifer wants to withdraw $1,242.06 once per year for 5 years while she travels. Her account pays 1.29%/a compounded annually. What balance must she start with?",
          "pmt": 1242.06,
          "rate": 1.29,
          "cy": 1,
          "years": 5,
          "answer": 5977.01,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Ian plans to withdraw $432.87 every 6 months for 10 years from an account earning 1.47%/a compounded semi-annually. What is the present value of the annuity?",
          "pmt": 432.87,
          "rate": 1.47,
          "cy": 2,
          "years": 10,
          "answer": 8023.81,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Miranda began depositing $10,739.44 every 6 months into a high-interest account when she was 9. The account earns 5.87%/a compounded semi-annually. At age 13, how much interest has the account earned?",
          "pmt": 10739.44,
          "rate": 5.87,
          "cy": 2,
          "years": 4,
          "answer": 9363.2,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Moe and Andrea deposit $62.06 every 2 weeks into an RESP earning 7.27%/a compounded biweekly. After 4 years, how much interest will the RESP have earned?",
          "pmt": 62.06,
          "rate": 7.27,
          "cy": 26,
          "years": 4,
          "answer": 1024.39,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Harry saves $653.81 every 6 months in a workplace investment account earning 9.41%/a compounded semi-annually. After 6 years, what is the total interest earned?",
          "pmt": 653.81,
          "rate": 9.41,
          "cy": 2,
          "years": 6,
          "answer": 2385.08,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Paula is paying off a home renovation loan with biweekly payments of $105.00 for 11 years at 2.29%/a compounded biweekly. What is the total interest paid?",
          "pmt": 105.0,
          "rate": 2.29,
          "cy": 26,
          "years": 11,
          "answer": 3494.0,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Joshua and Megan financed a family vehicle with semi-annual payments of $2,078 over 9 years at 3.2%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 2078.0,
          "rate": 3.2,
          "cy": 2,
          "years": 9,
          "answer": 5126.53,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Rachel is repaying her government-backed business loan with semi-annual payments of $6,682 for 5 years at 4.26%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 6682.0,
          "rate": 4.26,
          "cy": 2,
          "years": 5,
          "answer": 7204.58,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        1,
        8,
        1,
        8,
        0,
        1,
        7,
        0,
        7,
        0,
        1,
        8,
        1,
        8,
        0,
        7,
        0,
        1,
        8,
        1,
        7,
        0,
        7,
        0,
        7,
        0,
        1,
        8,
        0,
        7,
        9,
        2,
        7,
        5,
        7,
        0,
        7,
        0,
        2,
        9,
        0,
        7,
        0,
        5,
        7,
        0,
        5,
        7,
        0,
        7,
        5,
        5,
        5,
        7,
        0,
        7,
        0,
        5,
        5,
        5,
        5,
        5,
        7,
        0,
        1,
        8,
        0,
        7,
        0,
        7,
        0,
        7,
        0,
        1,
        8,
        1,
        8,
        1,
        2,
        7,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        9,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8
      ]
    },
    "D2": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Alexander deposits $5.40 every 2 weeks from his part-time pay into a TFSA earning 5%/a compounded biweekly. After 8 years, what is the balance?",
          "pmt": 5.4,
          "rate": 5.0,
          "cy": 26,
          "years": 8,
          "answer": 1379.43,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Aiden deposits $22.23 every month into a university savings account earning 4.99%/a compounded monthly. What will the balance be after 9 years?",
          "pmt": 22.23,
          "rate": 4.99,
          "cy": 12,
          "years": 9,
          "answer": 3022.8,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Agatha and Tyler deposit $3,637.64 once per year into an RESP earning 1.78%/a compounded annually. How much will they have saved after 1 year?",
          "pmt": 3637.64,
          "rate": 1.78,
          "cy": 1,
          "years": 1,
          "answer": 3637.64,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Jalen will receive $681.13 once per year for 9 years from a scholarship annuity earning 3.86%/a compounded annually. What is the present value of the annuity?",
          "pmt": 681.13,
          "rate": 3.86,
          "cy": 1,
          "years": 9,
          "answer": 5096.89,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Trevor plans to withdraw $430.10 every 6 months for 9 years from an account earning 4.44%/a compounded semi-annually. What is the present value of the annuity?",
          "pmt": 430.1,
          "rate": 4.44,
          "cy": 2,
          "years": 9,
          "answer": 6325.07,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Junetta wants to withdraw $343.98 every month for 2 years while she travels. Her account pays 2.44%/a compounded monthly. What balance must she start with?",
          "pmt": 343.98,
          "rate": 2.44,
          "cy": 12,
          "years": 2,
          "answer": 8049.34,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Xavier deposits $1,479.64 once per year into a high-interest account paying 12.91%/a compounded annually. After 9 years, what is the total interest earned?",
          "pmt": 1479.64,
          "rate": 12.91,
          "cy": 1,
          "years": 9,
          "answer": 9405.94,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Max saves $66.54 every 2 weeks in a workplace investment account earning 11.46%/a compounded biweekly. After 4 years, what is the total interest earned?",
          "pmt": 66.54,
          "rate": 11.46,
          "cy": 26,
          "years": 4,
          "answer": 1834.95,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Bob and Tiffany deposit $122.76 every 3 months into an RESP earning 11.31%/a compounded quarterly. After 8 years, how much interest will the RESP have earned?",
          "pmt": 122.76,
          "rate": 11.31,
          "cy": 4,
          "years": 8,
          "answer": 2326.26,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Christian and Evelyn financed a family vacation with monthly payments of $534.00 over 5 years at 5.21%/a compounded monthly. What is the total interest paid?",
          "pmt": 534.0,
          "rate": 5.21,
          "cy": 12,
          "years": 5,
          "answer": 3886.72,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Agatha is paying off a home renovation loan with biweekly payments of $266.00 for 7 years at 2.97%/a compounded biweekly. What is the total interest paid?",
          "pmt": 266.0,
          "rate": 2.97,
          "cy": 26,
          "years": 7,
          "answer": 4723.52,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Bryan took out a debt-consolidation loan and pays $1,718 each month for 3 years at 6.99%/a compounded monthly. What is the total interest paid?",
          "pmt": 1718.0,
          "rate": 6.99,
          "cy": 12,
          "years": 3,
          "answer": 6199.81,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        0,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        8,
        0,
        4,
        11,
        6,
        6,
        11,
        4,
        6,
        11,
        0,
        1,
        7,
        11,
        4,
        11,
        4,
        9,
        11,
        4,
        7,
        0,
        7,
        0,
        7,
        11,
        4,
        9,
        10,
        3,
        5,
        7,
        10,
        3,
        10,
        3,
        9,
        2,
        3,
        10,
        5,
        7,
        10,
        3,
        10,
        3,
        9,
        2,
        3,
        10,
        0,
        3,
        10,
        3,
        10,
        3,
        9,
        2,
        3,
        10,
        0,
        3,
        10,
        3,
        10,
        3,
        9,
        2,
        3,
        10,
        0,
        7,
        10,
        3,
        10,
        3,
        9,
        2,
        3,
        10,
        2,
        7,
        10,
        3,
        10,
        3,
        9,
        2,
        3,
        10
      ]
    },
    "A3": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Sue and Steve deposit $8.46 every month into an RESP earning 6.71%/a compounded monthly. How much will they have saved after 11 years?",
          "pmt": 8.46,
          "rate": 6.71,
          "cy": 12,
          "years": 11,
          "answer": 1645.59,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Asha deposits $7.80 every 2 weeks into a university savings account earning 6.76%/a compounded biweekly. What will the balance be after 8 years?",
          "pmt": 7.8,
          "rate": 6.76,
          "cy": 26,
          "years": 8,
          "answer": 2148.53,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Alex invests $455.74 once per year into a growth fund earning 2.38%/a compounded annually. After 9 years, how much will the fund be worth?",
          "pmt": 455.74,
          "rate": 2.38,
          "cy": 1,
          "years": 9,
          "answer": 4514.62,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Betty pays off a student loan with biweekly payments of $53.42 for 4 years at 4.36%/a compounded biweekly. How much did she originally borrow?",
          "pmt": 53.42,
          "rate": 4.36,
          "cy": 26,
          "years": 4,
          "answer": 5094.29,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Miranda wins a charity prize that pays her $58.73 each month for 10 years. The charity funds the prize from an account earning 2.61%/a compounded monthly. How much must the charity set aside now?",
          "pmt": 58.73,
          "rate": 2.61,
          "cy": 12,
          "years": 10,
          "answer": 6197.05,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Matthew will receive $1,122.16 once per year for 10 years from a scholarship annuity earning 5.09%/a compounded annually. What is the present value of the annuity?",
          "pmt": 1122.16,
          "rate": 5.09,
          "cy": 1,
          "years": 10,
          "answer": 8627.27,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Stuart and Paula deposit $621.76 every 3 months into an RESP earning 9.69%/a compounded quarterly. After 8 years, how much interest will the RESP have earned?",
          "pmt": 621.76,
          "rate": 9.69,
          "cy": 4,
          "years": 8,
          "answer": 9646.76,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Jevon saves $24,257.92 every 6 months in a workplace investment account earning 7.77%/a compounded semi-annually. After 1 year, what is the total interest earned?",
          "pmt": 24257.92,
          "rate": 7.77,
          "cy": 2,
          "years": 1,
          "answer": 942.42,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Ethan deposits $240.32 each month into a high-interest account paying 13.06%/a compounded monthly. After 3 years, what is the total interest earned?",
          "pmt": 240.32,
          "rate": 13.06,
          "cy": 12,
          "years": 3,
          "answer": 1870.59,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Robert and Daija financed new appliances with biweekly payments of $473.00 over 7 years at 1.54%/a compounded biweekly. What is the total interest paid?",
          "pmt": 473.0,
          "rate": 1.54,
          "cy": 26,
          "years": 7,
          "answer": 4500.58,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Beatrice is repaying her student loan with quarterly payments of $32,655 for 1 year at 6.97%/a compounded quarterly. What is the total interest paid?",
          "pmt": 32655.0,
          "rate": 6.97,
          "cy": 4,
          "years": 1,
          "answer": 5497.72,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Ian took out a small business loan and pays $7,041 each year for 6 years at 5.27%/a compounded annually. What is the total interest paid?",
          "pmt": 7041.0,
          "rate": 5.27,
          "cy": 1,
          "years": 6,
          "answer": 6814.58,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        2,
        9,
        10,
        3,
        10,
        6,
        10,
        0,
        2,
        7,
        9,
        2,
        4,
        6,
        6,
        6,
        6,
        7,
        9,
        2,
        9,
        2,
        4,
        11,
        4,
        11,
        4,
        7,
        0,
        2,
        9,
        2,
        4,
        11,
        4,
        11,
        4,
        11,
        0,
        2,
        9,
        2,
        4,
        6,
        6,
        6,
        11,
        4,
        7,
        0,
        2,
        9,
        11,
        6,
        11,
        6,
        11,
        4,
        7,
        0,
        2,
        9,
        2,
        4,
        11,
        4,
        11,
        6,
        6,
        7,
        9,
        2,
        9,
        11,
        4,
        11,
        4,
        11,
        6,
        6,
        11,
        2,
        9,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        6,
        6,
        11,
        6,
        6,
        11
      ]
    },
    "B3": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Victor deposits $124.60 every 6 months into a TFSA earning 1.12%/a compounded semi-annually. How much will the TFSA hold after 7 years?",
          "pmt": 124.6,
          "rate": 1.12,
          "cy": 2,
          "years": 7,
          "answer": 1809.34,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Connor deposits $33.74 every month from his part-time job into a growth fund earning 4.32%/a compounded monthly. After 5 years, how much will the fund be worth?",
          "pmt": 33.74,
          "rate": 4.32,
          "cy": 12,
          "years": 5,
          "answer": 2255.15,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Andrew deposits $710.87 every 6 months into a university savings account earning 5.46%/a compounded semi-annually. What will the balance be after 3 years?",
          "pmt": 710.87,
          "rate": 5.46,
          "cy": 2,
          "years": 3,
          "answer": 4567.14,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Future Electronics is selling a laptop with no money down and 78 equal biweekly payments of $71.05 at 3.56%/a compounded biweekly. What is the equivalent cash price?",
          "pmt": 71.05,
          "rate": 3.56,
          "cy": 26,
          "years": 3.0,
          "answer": 5252.82,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Brooke wins a charity prize that pays her $309.17 every 3 months for 6 years. The charity funds the prize from an account earning 3.37%/a compounded quarterly. How much must the charity set aside now?",
          "pmt": 309.17,
          "rate": 3.37,
          "cy": 4,
          "years": 6,
          "answer": 6692.61,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Sopie wants to withdraw $333.50 every 3 months for 8 years while she travels. Her account pays 6.34%/a compounded quarterly. What balance must she start with?",
          "pmt": 333.5,
          "rate": 6.34,
          "cy": 4,
          "years": 8,
          "answer": 8320.05,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Andrea began depositing $1,190.44 every 2 weeks into a high-interest account when she was 9. The account earns 13.09%/a compounded biweekly. At age 11, how much interest has the account earned?",
          "pmt": 1190.44,
          "rate": 13.09,
          "cy": 26,
          "years": 2,
          "answer": 8657.31,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Harry deposits $26.34 every 3 months into a long-term investment account paying 12.4%/a compounded quarterly. After 8 years, what is the total interest earned?",
          "pmt": 26.34,
          "rate": 12.4,
          "cy": 4,
          "years": 8,
          "answer": 564.44,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Biff saves $507.78 each month in a workplace investment account earning 10.6%/a compounded monthly. After 3 years, what is the total interest earned?",
          "pmt": 507.78,
          "rate": 10.6,
          "cy": 12,
          "years": 3,
          "answer": 3130.53,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Ama is repaying her student loan with semi-annual payments of $2,681 for 10 years at 1.5%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 2681.0,
          "rate": 1.5,
          "cy": 2,
          "years": 10,
          "answer": 4000.0,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Steve and Sally financed a kitchen renovation with quarterly payments of $3,624 for 6 years at 1.85%/a compounded quarterly. What is the total interest paid?",
          "pmt": 3624.0,
          "rate": 1.85,
          "cy": 4,
          "years": 6,
          "answer": 4832.88,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Heidi is paying off a home renovation loan with biweekly payments of $770.00 for 7 years at 1.48%/a compounded biweekly. What is the total interest paid?",
          "pmt": 770.0,
          "rate": 1.48,
          "cy": 26,
          "years": 7,
          "answer": 7050.87,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        0,
        1,
        7,
        8,
        1,
        8,
        9,
        2,
        9,
        1,
        7,
        8,
        1,
        7,
        8,
        1,
        2,
        9,
        2,
        9,
        0,
        7,
        8,
        0,
        7,
        8,
        9,
        2,
        9,
        2,
        9,
        0,
        1,
        8,
        0,
        7,
        0,
        2,
        9,
        2,
        9,
        0,
        7,
        8,
        1,
        8,
        1,
        7,
        0,
        7,
        9,
        2,
        7,
        8,
        1,
        8,
        1,
        8,
        0,
        7,
        9,
        2,
        7,
        8,
        1,
        8,
        1,
        8,
        1,
        7,
        0,
        1,
        7,
        0,
        1,
        8,
        1,
        8,
        1,
        7,
        0,
        1,
        8,
        0,
        1,
        8,
        1,
        8,
        1,
        8,
        0,
        1,
        8,
        0,
        1,
        8,
        1,
        8,
        1,
        8
      ]
    },
    "C3": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Rhea borrows $44.08 every 6 months on a line of credit charging 3.01%/a compounded semi-annually. After 9 years of these draws, what total balance will she owe?",
          "pmt": 44.08,
          "rate": 3.01,
          "cy": 2,
          "years": 9,
          "answer": 903.57,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Christian deposits $241.57 once per year into a university savings account earning 5.92%/a compounded annually. How much will be saved after 10 years?",
          "pmt": 241.57,
          "rate": 5.92,
          "cy": 1,
          "years": 10,
          "answer": 3172.15,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Determine the future value of an annuity with semi-annual deposits of $152.92 at 1.76%/a compounded semi-annually for 11 years.",
          "pmt": 152.92,
          "rate": 1.76,
          "cy": 2,
          "years": 11,
          "answer": 3694.12,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Xavier is converting his RRSP into an income fund that pays $900.10 once per year for 8 years. The fund earns 6.07%/a compounded annually. How much must he invest now?",
          "pmt": 900.1,
          "rate": 6.07,
          "cy": 1,
          "years": 8,
          "answer": 5573.98,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Nicole wins a charity prize that pays her $273.86 every 3 months for 6 years. The charity funds the prize from an account earning 2.97%/a compounded quarterly. How much must the charity set aside now?",
          "pmt": 273.86,
          "rate": 2.97,
          "cy": 4,
          "years": 6,
          "answer": 5999.98,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Mudasir plans to withdraw $3,953.29 every 6 months for 1 year from an account earning 2.17%/a compounded semi-annually. What is the present value of the annuity?",
          "pmt": 3953.29,
          "rate": 2.17,
          "cy": 2,
          "years": 1,
          "answer": 7779.74,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Raymond deposits $3,428.58 once per year into a TFSA earning 5.16%/a compounded annually. After 10 years, what is the total interest earned?",
          "pmt": 3428.58,
          "rate": 5.16,
          "cy": 1,
          "years": 10,
          "answer": 9161.93,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Dakota saves $5.96 every 2 weeks in a high-interest account earning 13.93%/a compounded biweekly. After 10 years, what is the total interest earned?",
          "pmt": 5.96,
          "rate": 13.93,
          "cy": 26,
          "years": 10,
          "answer": 1800.97,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Ferguson and Shendrita deposit $25.13 every month into an RESP earning 13.92%/a compounded monthly. After 9 years, how much interest will the RESP have earned?",
          "pmt": 25.13,
          "rate": 13.92,
          "cy": 12,
          "years": 9,
          "answer": 2647.71,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Victor and Betty financed new furniture with quarterly payments of $5,074 over 3 years at 4.71%/a compounded quarterly. What is the total interest paid?",
          "pmt": 5074.0,
          "rate": 4.71,
          "cy": 4,
          "years": 3,
          "answer": 4415.03,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Alyssa is paying off a home renovation loan with quarterly payments of $967.00 for 7 years at 5.54%/a compounded quarterly. What is the total interest paid?",
          "pmt": 967.0,
          "rate": 5.54,
          "cy": 4,
          "years": 7,
          "answer": 4758.62,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Seyram took out a debt-consolidation loan and pays $2,629 every 6 months for 8 years at 4.42%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 2629.0,
          "rate": 4.42,
          "cy": 2,
          "years": 8,
          "answer": 6954.92,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        9,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        2,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        7,
        0,
        1,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        0,
        7,
        8,
        1,
        8,
        1,
        8,
        1,
        8,
        0,
        2,
        7,
        0,
        1,
        2,
        8,
        1,
        8,
        1,
        7,
        9,
        0,
        7,
        0,
        2,
        8,
        1,
        8,
        1,
        7,
        9,
        0,
        4,
        7,
        9,
        2,
        8,
        1,
        7,
        9,
        2,
        7,
        11,
        0,
        7,
        9,
        1,
        8,
        0,
        2,
        9
      ]
    },
    "D3": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Alexa deposits $5.81 every 2 weeks into an RRSP earning 4.81%/a compounded biweekly. How much will she have after 7 years?",
          "pmt": 5.81,
          "rate": 4.81,
          "cy": 26,
          "years": 7,
          "answer": 1255.85,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Matt invests $2,386.62 once per year into a growth fund earning 2.11%/a compounded annually. After 1 year, how much will the fund be worth?",
          "pmt": 2386.62,
          "rate": 2.11,
          "cy": 1,
          "years": 1,
          "answer": 2386.62,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Dulce invests $671.34 at the end of each year into an account paying 2.73%/a compounded annually. After 6 years, what is the balance?",
          "pmt": 671.34,
          "rate": 2.73,
          "cy": 1,
          "years": 6,
          "answer": 4313.17,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Mackenzie wins a charity prize that pays her $1,503.09 every 6 months for 2 years. The charity funds the prize from an account earning 5.2%/a compounded semi-annually. How much must the charity set aside now?",
          "pmt": 1503.09,
          "rate": 5.2,
          "cy": 2,
          "years": 2,
          "answer": 5640.99,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Future Electronics is selling a TV with no money down and 234 equal biweekly payments of $32.14 at 4.81%/a compounded biweekly. What is the equivalent cash price?",
          "pmt": 32.14,
          "rate": 4.81,
          "cy": 26,
          "years": 9.0,
          "answer": 6099.91,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Aiden is converting his RRSP into an income fund that pays $458.23 every 3 months for 5 years. The fund earns 2.54%/a compounded quarterly. How much must he invest now?",
          "pmt": 458.23,
          "rate": 2.54,
          "cy": 4,
          "years": 5,
          "answer": 8581.0,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Yohan saves $23,529.06 once per year in a workplace investment account earning 12.19%/a compounded annually. After 3 years, what is the total interest earned?",
          "pmt": 23529.06,
          "rate": 12.19,
          "cy": 1,
          "years": 3,
          "answer": 8954.21,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Nathan deposits $41.54 every 3 months into a long-term investment account paying 6.57%/a compounded quarterly. After 11 years, what is the total interest earned?",
          "pmt": 41.54,
          "rate": 6.57,
          "cy": 4,
          "years": 11,
          "answer": 822.53,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Natalie began depositing $89.10 each month into a savings account when she was 9. The account earns 5.1%/a compounded monthly. At age 17, how much interest has the account earned?",
          "pmt": 89.1,
          "rate": 5.1,
          "cy": 12,
          "years": 8,
          "answer": 1981.32,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Gisselle is repaying her student loan with monthly payments of $1,788 for 3 years at 3.7%/a compounded monthly. What is the total interest paid?",
          "pmt": 1788.0,
          "rate": 3.7,
          "cy": 12,
          "years": 3,
          "answer": 3532.47,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Matt took out a debt-consolidation loan and pays $5,531 every 2 weeks for 2 years at 2.02%/a compounded biweekly. What is the total interest paid?",
          "pmt": 5531.0,
          "rate": 2.02,
          "cy": 26,
          "years": 2,
          "answer": 5839.56,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Dulce is paying off a home renovation loan with annual payments of $3,792 for 8 years at 6.23%/a compounded annually. What is the total interest paid?",
          "pmt": 3792.0,
          "rate": 6.23,
          "cy": 1,
          "years": 8,
          "answer": 7001.32,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        1,
        2,
        7,
        10,
        3,
        9,
        2,
        9,
        2,
        3,
        8,
        0,
        7,
        0,
        7,
        11,
        4,
        11,
        4,
        11,
        0,
        7,
        9,
        2,
        7,
        0,
        4,
        6,
        6,
        11,
        0,
        2,
        9,
        2,
        9,
        2,
        7,
        11,
        4,
        11,
        2,
        9,
        2,
        9,
        0,
        7,
        9,
        0,
        4,
        11,
        0,
        7,
        9,
        2,
        7,
        8,
        9,
        0,
        6,
        11,
        0,
        2,
        7,
        9,
        0,
        7,
        0,
        2,
        7,
        11,
        0,
        2,
        8,
        0,
        2,
        7,
        0,
        2,
        7,
        11,
        0,
        2,
        8,
        0,
        2,
        9,
        2,
        7,
        0,
        4,
        7,
        0,
        7,
        0,
        2,
        9,
        1,
        7,
        11,
        6
      ]
    },
    "A4": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Nuna and Anthony deposit $68.00 every 3 months into an RESP earning 1.74%/a compounded quarterly. How much will they have saved after 6 years?",
          "pmt": 68.0,
          "rate": 1.74,
          "cy": 4,
          "years": 6,
          "answer": 1716.31,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Yohan deposits $117.57 every 6 months into a TFSA earning 2.53%/a compounded semi-annually. How much will the TFSA hold after 8 years?",
          "pmt": 117.57,
          "rate": 2.53,
          "cy": 2,
          "years": 8,
          "answer": 2070.57,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Karla deposits $15.50 every 2 weeks into a line of credit she has been using to fund travel. The line charges 1.14%/a compounded biweekly. After 10 years of these draws, what total balance will she owe?",
          "pmt": 15.5,
          "rate": 1.14,
          "cy": 26,
          "years": 10,
          "answer": 4267.7,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Luis is converting his RRSP into an income fund that pays $164.93 every 3 months for 11 years. The fund earns 4.75%/a compounded quarterly. How much must he invest now?",
          "pmt": 164.93,
          "rate": 4.75,
          "cy": 4,
          "years": 11,
          "answer": 5626.87,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Stuart plans to withdraw $363.33 every 6 months for 11 years from an account earning 4.15%/a compounded semi-annually. What is the present value of the annuity?",
          "pmt": 363.33,
          "rate": 4.15,
          "cy": 2,
          "years": 11,
          "answer": 6365.48,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Future Electronics is selling a home theatre system with no money down and 20 equal semi-annual payments of $525.75 at 6.7%/a compounded semi-annually. What is the equivalent cash price?",
          "pmt": 525.75,
          "rate": 6.7,
          "cy": 2,
          "years": 10.0,
          "answer": 7574.61,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Biff and Angela deposit $2,672.99 every 3 months into an RESP earning 6.54%/a compounded quarterly. After 5 years, how much interest will the RESP have earned?",
          "pmt": 2672.99,
          "rate": 6.54,
          "cy": 4,
          "years": 5,
          "answer": 9177.92,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Tiffany began depositing $9,287.40 once per year into a high-interest account when she was 9. The account earns 11.98%/a compounded annually. At age 11, how much interest has the account earned?",
          "pmt": 9287.4,
          "rate": 11.98,
          "cy": 1,
          "years": 2,
          "answer": 1112.63,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Matthew deposits $190.17 every 3 months into a long-term investment account paying 7.07%/a compounded quarterly. After 8 years, what is the total interest earned?",
          "pmt": 190.17,
          "rate": 7.07,
          "cy": 4,
          "years": 8,
          "answer": 2003.67,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Toby took out a debt-consolidation loan and pays $15,967 every 6 months for 4 years at 1.5%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 15967.0,
          "rate": 1.5,
          "cy": 2,
          "years": 4,
          "answer": 4205.5,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Sue is repaying her student loan with biweekly payments of $332.00 for 7 years at 2.86%/a compounded biweekly. What is the total interest paid?",
          "pmt": 332.0,
          "rate": 2.86,
          "cy": 26,
          "years": 7,
          "answer": 5691.41,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Connor and Sally financed a family vacation with monthly payments of $204.00 over 10 years at 6.67%/a compounded monthly. What is the total interest paid?",
          "pmt": 204.0,
          "rate": 6.67,
          "cy": 12,
          "years": 10,
          "answer": 6650.15,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        4,
        6,
        6,
        6,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        6,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        6,
        6,
        11,
        4,
        11,
        6,
        6,
        11,
        4,
        11,
        4,
        6,
        6,
        11,
        6,
        11,
        6,
        6,
        11,
        4,
        11,
        4,
        6,
        11,
        4,
        11,
        4,
        6,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        6,
        6,
        6,
        11,
        4,
        11,
        6,
        6,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        11,
        4,
        6,
        11,
        4,
        11,
        4,
        6,
        6,
        11,
        4,
        11,
        4,
        6,
        11
      ]
    },
    "B4": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Dakota deposits $130.56 once per year into a TFSA earning 1.25%/a compounded annually. How much will the TFSA hold after 11 years?",
          "pmt": 130.56,
          "rate": 1.25,
          "cy": 1,
          "years": 11,
          "answer": 1529.37,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Connor invests $203.63 once per year into a growth fund earning 6.5%/a compounded annually. After 10 years, how much will the fund be worth?",
          "pmt": 203.63,
          "rate": 6.5,
          "cy": 1,
          "years": 10,
          "answer": 2747.87,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Jevon deposits $78.58 every 3 months into a university savings account earning 4.73%/a compounded quarterly. What will the balance be after 11 years?",
          "pmt": 78.58,
          "rate": 4.73,
          "cy": 4,
          "years": 11,
          "answer": 4501.52,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Daija wins a charity prize that pays her $1,527.01 every 6 months for 2 years. The charity funds the prize from an account earning 2.73%/a compounded semi-annually. How much must the charity set aside now?",
          "pmt": 1527.01,
          "rate": 2.73,
          "cy": 2,
          "years": 2,
          "answer": 5905.16,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Cliff is converting his RRSP into an income fund that pays $639.89 every 3 months for 3 years. The fund earns 4.03%/a compounded quarterly. How much must he invest now?",
          "pmt": 639.89,
          "rate": 4.03,
          "cy": 4,
          "years": 3,
          "answer": 7198.6,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Seyram will receive $2,876.61 once per year for 3 years from a scholarship annuity earning 5.86%/a compounded annually. What is the present value of the annuity?",
          "pmt": 2876.61,
          "rate": 5.86,
          "cy": 1,
          "years": 3,
          "answer": 7709.17,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Crystal began depositing $4,111.47 every 3 months into a high-interest account when she was 9. The account earns 12.28%/a compounded quarterly. At age 12, how much interest has the account earned?",
          "pmt": 4111.47,
          "rate": 12.28,
          "cy": 4,
          "years": 3,
          "answer": 9245.05,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Isaiah deposits $14.39 every 2 weeks into a high-interest account paying 14.2%/a compounded biweekly. After 7 years, what is the total interest earned?",
          "pmt": 14.39,
          "rate": 14.2,
          "cy": 26,
          "years": 7,
          "answer": 1846.26,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Trevor saves $1,145.36 every 6 months in a workplace investment account earning 8.51%/a compounded semi-annually. After 5 years, what is the total interest earned?",
          "pmt": 1145.36,
          "rate": 8.51,
          "cy": 2,
          "years": 5,
          "answer": 2461.43,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Emy is repaying her student loan with biweekly payments of $284.00 for 9 years at 1.41%/a compounded biweekly. What is the total interest paid?",
          "pmt": 284.0,
          "rate": 1.41,
          "cy": 26,
          "years": 9,
          "answer": 4059.65,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "George and Emily financed an in-ground pool with quarterly payments of $1,198 for 6 years at 6.26%/a compounded quarterly. What is the total interest paid?",
          "pmt": 1198.0,
          "rate": 6.26,
          "cy": 4,
          "years": 6,
          "answer": 4935.75,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Melissa is paying off a home renovation loan with monthly payments of $799.00 for 10 years at 1.53%/a compounded monthly. What is the total interest paid?",
          "pmt": 799.0,
          "rate": 1.53,
          "cy": 12,
          "years": 10,
          "answer": 7027.04,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        0,
        1,
        8,
        0,
        2,
        9,
        2,
        8,
        1,
        8,
        0,
        7,
        8,
        0,
        2,
        9,
        2,
        8,
        9,
        2,
        4,
        7,
        8,
        0,
        2,
        9,
        2,
        8,
        9,
        2,
        4,
        7,
        8,
        1,
        7,
        9,
        2,
        8,
        9,
        2,
        4,
        7,
        9,
        1,
        7,
        9,
        2,
        8,
        1,
        2,
        4,
        7,
        9,
        2,
        7,
        9,
        2,
        8,
        1,
        2,
        6,
        7,
        9,
        2,
        7,
        0,
        2,
        8,
        1,
        2,
        4,
        7,
        9,
        2,
        9,
        0,
        1,
        8,
        1,
        8,
        11,
        0,
        2,
        9,
        2,
        7,
        8,
        1,
        8,
        1,
        4,
        7,
        9,
        2,
        9,
        0,
        2,
        9,
        2,
        8
      ]
    },
    "C4": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Beatrice invests $10.94 at the end of each month into an account paying 1.45%/a compounded monthly. After 11 years, what is the balance?",
          "pmt": 10.94,
          "rate": 1.45,
          "cy": 12,
          "years": 11,
          "answer": 1564.6,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Determine the future value of an annuity with biweekly deposits of $9.52 at 2.69%/a compounded biweekly for 8 years.",
          "pmt": 9.52,
          "rate": 2.69,
          "cy": 26,
          "years": 8,
          "answer": 2208.1,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Darryl deposits $38.70 every 2 weeks into a university savings account earning 3.01%/a compounded biweekly. What will the balance be after 4 years?",
          "pmt": 38.7,
          "rate": 3.01,
          "cy": 26,
          "years": 4,
          "answer": 4274.49,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Christian will receive $917.41 every 6 months for 3 years from a scholarship annuity earning 4.43%/a compounded semi-annually. What is the present value of the annuity?",
          "pmt": 917.41,
          "rate": 4.43,
          "cy": 2,
          "years": 3,
          "answer": 5101.73,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Future Electronics is selling a sound system with no money down and 7 equal annual payments of $1,059.52 at 1.59%/a compounded annually. What is the equivalent cash price?",
          "pmt": 1059.52,
          "rate": 1.59,
          "cy": 1,
          "years": 7.0,
          "answer": 6966.58,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Chuck plans to withdraw $72.41 every month for 11 years from an account earning 2.69%/a compounded monthly. What is the present value of the annuity?",
          "pmt": 72.41,
          "rate": 2.69,
          "cy": 12,
          "years": 11,
          "answer": 8265.78,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Kendra began depositing $9,304.00 every 6 months into a high-interest account when she was 9. The account earns 12.67%/a compounded semi-annually. At age 12, how much interest has the account earned?",
          "pmt": 9304.0,
          "rate": 12.67,
          "cy": 2,
          "years": 3,
          "answer": 9624.3,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Stuart and Shendrita deposit $87.57 every month into an RESP earning 6.9%/a compounded monthly. After 5 years, how much interest will the RESP have earned?",
          "pmt": 87.57,
          "rate": 6.9,
          "cy": 12,
          "years": 5,
          "answer": 998.99,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Xavier saves $44.41 each month in a workplace investment account earning 7.26%/a compounded monthly. After 11 years, what is the total interest earned?",
          "pmt": 44.41,
          "rate": 7.26,
          "cy": 12,
          "years": 11,
          "answer": 3071.9,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Emy is paying off a home renovation loan with quarterly payments of $5,267 for 4 years at 2.4%/a compounded quarterly. What is the total interest paid?",
          "pmt": 5267.0,
          "rate": 2.4,
          "cy": 4,
          "years": 4,
          "answer": 4147.45,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Clarence and Melissa financed a family vehicle with quarterly payments of $1,278 over 7 years at 4.87%/a compounded quarterly. What is the total interest paid?",
          "pmt": 1278.0,
          "rate": 4.87,
          "cy": 4,
          "years": 7,
          "answer": 5615.37,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Junetta is repaying her student loan with biweekly payments of $538.00 for 5 years at 3.83%/a compounded biweekly. What is the total interest paid?",
          "pmt": 538.0,
          "rate": 3.83,
          "cy": 26,
          "years": 5,
          "answer": 6331.48,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        0,
        4,
        11,
        0,
        2,
        8,
        1,
        7,
        9,
        2,
        7,
        6,
        11,
        0,
        7,
        8,
        0,
        7,
        9,
        2,
        7,
        6,
        11,
        4,
        7,
        0,
        7,
        9,
        2,
        9,
        0,
        4,
        6,
        6,
        11,
        0,
        2,
        9,
        2,
        9,
        0,
        7,
        11,
        4,
        11,
        0,
        7,
        0,
        7,
        0,
        2,
        7,
        11,
        4,
        11,
        4,
        7,
        9,
        2,
        9,
        2,
        7,
        11,
        6,
        11,
        4,
        7,
        0,
        2,
        9,
        1,
        7,
        11,
        4,
        11,
        4,
        11,
        4,
        7,
        0,
        1,
        7,
        11,
        4,
        6,
        6,
        11,
        4,
        11,
        0,
        1,
        8,
        0,
        4,
        11,
        4,
        11,
        6,
        6,
        11
      ]
    },
    "D4": {
      "questions": [
        {
          "slot": 1,
          "type": "FV",
          "text": "Marilyn draws $85.81 every 3 months from a line of credit charging 4.62%/a compounded quarterly. After 4 years, what total balance will she owe?",
          "pmt": 85.81,
          "rate": 4.62,
          "cy": 4,
          "years": 4,
          "answer": 1498.55,
          "color": "black",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 2,
          "type": "FV",
          "text": "Ross deposits $293.85 once per year into a TFSA earning 4.46%/a compounded annually. How much will the TFSA hold after 9 years?",
          "pmt": 293.85,
          "rate": 4.46,
          "cy": 1,
          "years": 9,
          "answer": 3168.99,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 3,
          "type": "FV",
          "text": "Evelyn and Cam deposit $1,807.89 every 6 months into an RESP earning 1.26%/a compounded semi-annually. How much will they have saved after 1 year?",
          "pmt": 1807.89,
          "rate": 1.26,
          "cy": 2,
          "years": 1,
          "answer": 3627.17,
          "color": "brown",
          "curriculumTag": "MAP4C.C1.2",
          "difficulty": "intro",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Looks like you only summed up the payments without compounding. Try the FV formula \u2014 FV = PMT \u00d7 ((1+i)^n \u2212 1) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the END of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 are payments monthly, biweekly, quarterly, semi-annual, or annual? i = rate/100/cy and n = years \u00d7 cy."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 4,
          "type": "PV",
          "text": "Zedrick is converting his RRSP into an income fund that pays $28.13 every 2 weeks for 8 years. The fund earns 4.45%/a compounded biweekly. How much must he invest now?",
          "pmt": 28.13,
          "rate": 4.45,
          "cy": 26,
          "years": 8,
          "answer": 4919.38,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 5,
          "type": "PV",
          "text": "Darryl will receive $348.93 every 3 months for 6 years from a scholarship annuity earning 5.97%/a compounded quarterly. What is the present value of the annuity?",
          "pmt": 348.93,
          "rate": 5.97,
          "cy": 4,
          "years": 6,
          "answer": 6995.3,
          "color": "green",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 6,
          "type": "PV",
          "text": "Karla wants to withdraw $8,479.47 once per year for 1 year while she takes a sabbatical. Her account earns 1.19%/a compounded annually. What balance must she start with?",
          "pmt": 8479.47,
          "rate": 1.19,
          "cy": 1,
          "years": 1,
          "answer": 8379.75,
          "color": "white",
          "curriculumTag": "MAP4C.C1.3",
          "difficulty": "core",
          "commonErrors": [
            {
              "pattern": "pmt_times_n",
              "feedback": "Just summing the payments ignores the time value of money. Try PV = PMT \u00d7 (1 \u2212 (1+i)^\u2212n) / i."
            },
            {
              "pattern": "pv_not_fv",
              "feedback": "Check whether you're solving for present value or future value. This question asks for the value at the START of the term."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 7,
          "type": "INT_EARNED",
          "text": "Sydiem deposits $235.68 each month into a high-interest account paying 14.2%/a compounded monthly. After 6 years, what is the total interest earned?",
          "pmt": 235.68,
          "rate": 14.2,
          "cy": 12,
          "years": 6,
          "answer": 9572.62,
          "color": "yellowgreen",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 8,
          "type": "INT_EARNED",
          "text": "Beatrice began depositing $1,773.47 every 3 months into a high-interest account when she was 9. The account earns 11.48%/a compounded quarterly. At age 11, how much interest has the account earned?",
          "pmt": 1773.47,
          "rate": 11.48,
          "cy": 4,
          "years": 2,
          "answer": 1509.97,
          "color": "black",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 9,
          "type": "INT_EARNED",
          "text": "Ferguson and Betty deposit $204.96 every 3 months into an RESP earning 5.93%/a compounded quarterly. After 10 years, how much interest will the RESP have earned?",
          "pmt": 204.96,
          "rate": 5.93,
          "cy": 4,
          "years": 10,
          "answer": 2883.26,
          "color": "yellow",
          "curriculumTag": "MAP4C.C1.4",
          "difficulty": "multistep",
          "commonErrors": [
            {
              "pattern": "fv_not_interest",
              "feedback": "You may have stopped at FV. For interest EARNED, subtract the total payments: Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Sum of payments alone is not the interest \u2014 that's the principal. Interest = FV \u2212 (PMT \u00d7 N)."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the deposit period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 10,
          "type": "INT_PAID",
          "text": "Cam took out a vehicle loan and pays $4,637 every 3 months for 3 years at 4.45%/a compounded quarterly. What is the total interest paid?",
          "pmt": 4637.0,
          "rate": 4.45,
          "cy": 4,
          "years": 3,
          "answer": 3823.27,
          "color": "brown",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 11,
          "type": "INT_PAID",
          "text": "Mesgana is paying off a home renovation loan with annual payments of $6,683 for 10 years at 1.31%/a compounded annually. What is the total interest paid?",
          "pmt": 6683.0,
          "rate": 1.31,
          "cy": 1,
          "years": 10,
          "answer": 4573.15,
          "color": "skyblue",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        },
        {
          "slot": 12,
          "type": "INT_PAID",
          "text": "Mudasir and Nuna financed a family vehicle with semi-annual payments of $1,328 over 11 years at 4.76%/a compounded semi-annually. What is the total interest paid?",
          "pmt": 1328.0,
          "rate": 4.76,
          "cy": 2,
          "years": 11,
          "answer": 6675.09,
          "color": "green",
          "curriculumTag": "MAP4C.C2.2",
          "difficulty": "challenge",
          "commonErrors": [
            {
              "pattern": "pv_not_interest",
              "feedback": "You may have stopped at PV (the amount borrowed). For interest PAID, do PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "pmt_times_n",
              "feedback": "Total of payments alone is what you paid \u2014 interest is the EXTRA: Interest = PMT \u00d7 N \u2212 PV."
            },
            {
              "pattern": "off_by_freq",
              "feedback": "Check your payment frequency \u2014 i = rate/100/cy and n = years \u00d7 cy must match the payment period."
            },
            {
              "pattern": "close_check_rounding",
              "feedback": "Very close \u2014 double-check your rounding. Keep more decimals on i until the final step."
            }
          ]
        }
      ],
      "grid": [
        2,
        7,
        0,
        7,
        9,
        2,
        8,
        0,
        7,
        11,
        2,
        9,
        2,
        9,
        2,
        9,
        2,
        8,
        0,
        4,
        9,
        2,
        9,
        2,
        9,
        2,
        9,
        1,
        7,
        6,
        9,
        2,
        9,
        2,
        9,
        2,
        9,
        0,
        7,
        6,
        7,
        0,
        2,
        9,
        2,
        9,
        0,
        7,
        0,
        4,
        9,
        2,
        7,
        0,
        7,
        0,
        7,
        8,
        0,
        4,
        9,
        2,
        9,
        2,
        9,
        2,
        9,
        1,
        7,
        11,
        2,
        9,
        2,
        9,
        2,
        9,
        2,
        7,
        0,
        4,
        7,
        0,
        7,
        0,
        7,
        0,
        7,
        0,
        4,
        6,
        11,
        4,
        6,
        11,
        4,
        11,
        6,
        6,
        11,
        4
      ]
    }
  }
};

function getSheetsData() { return SHEETS_DATA; }
